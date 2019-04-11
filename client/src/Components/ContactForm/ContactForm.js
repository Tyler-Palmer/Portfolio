import "antd/dist/antd.css";
import React, { Component } from "react";
import { Keyframes, animated } from "react-spring/renderprops";
import { Avatar, Form, Icon, Input, Button } from "antd";
import delay from "delay";
import { Link } from "react-router-dom";

const Sidebar = Keyframes.Spring({
    // Slots can take arrays/chains,
    peek: [{ x: 0, from: { x: -100 }, delay: 1000 }],
    // // single items,
    open: { delay: 0, x: 0 },
    // or async functions with side-effects
    close: async call => {
        await delay(400);
        await call({ delay: 0, x: -100 });
    }
});

const Content = Keyframes.Trail({
    peek: [
        { x: 0, opacity: 1, from: { x: -100, opacity: 0 }, delay: 1000 }
        // { x: -100, opacity: 0, delay: 0 }
    ],
    open: { x: 0, opacity: 1, delay: 100 },
    close: { x: -100, opacity: 0, delay: 0 }
});

// Component

const { TextArea } = Input;

class ContactForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: undefined
        };
    }
    // toggle = () =>
    //     this.setState(state => ({
    //         open: !state.open
    //     }));

    render() {
        const {
            email,
            name1,
            location,
            project,
            comment,
            handleChange,
            handleSubmit,
            sent,
            show,
            handleClick
        } = this.props;

        const state = "open";
        // this.state.open === undefined
        //     ? "peek"
        //     : this.state.open
        //     ? "open"
        //     : "close";

        const items = [
            <Avatar src="https://semantic-ui.com/images/avatar2/large/elyse.png" />,
            <Input
                size="small"
                prefix={
                    <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                placeholder="Name"
                name="name1"
                value={name1}
                onChange={handleChange}
            />,
            <Input
                size="small"
                prefix={
                    <Icon type="mail" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                placeholder="Email"
                name="email"
                value={email}
                onChange={handleChange}
            />,
            <Input
                size="small"
                prefix={
                    <Icon
                        type="environment"
                        style={{ color: "rgba(0,0,0,.25)" }}
                    />
                }
                placeholder="Location"
                name="location"
                value={location}
                onChange={handleChange}
            />,
            <Input
                size="small"
                prefix={
                    <Icon
                        type="shopping-cart"
                        style={{ color: "rgba(0,0,0,.25)" }}
                    />
                }
                placeholder="Project/Budget"
                name="project"
                value={project}
                onChange={handleChange}
            />,
            <TextArea
                rows={4}
                prefix={
                    <Icon type="smile-o" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                placeholder="Comments/Suggestions"
                name="comment"
                value={comment}
                onChange={handleChange}
            />,
            <Button
                size="small"
                type="primary"
                htmlType="submit"
                className="login-form-button"
                children="Submit"
                onClick={handleSubmit}
            />
        ];
        return (
            <div className="contactForm-wrapper">
                <div className="back-button">
                    <Link to="/">Back</Link>
                </div>
                <Sidebar native state={state}>
                    {({ x }) => (
                        <animated.div
                            className="sidebar"
                            style={{
                                transform: x.interpolate(
                                    x => `translate3d(${x}%,0,0)`
                                )
                            }}
                        >
                            <Content
                                native
                                items={items}
                                keys={items.map((_, i) => i)}
                                state={state}
                            >
                                {(item, i) => ({ x, ...props }) => (
                                    <animated.div
                                        style={{
                                            transform: x.interpolate(
                                                x => `translate3d(${x}%,0,0)`
                                            ),
                                            ...props
                                        }}
                                    >
                                        <Form.Item
                                            className={i === 0 ? "middle" : ""}
                                        >
                                            {item}
                                        </Form.Item>
                                    </animated.div>
                                )}
                            </Content>
                        </animated.div>
                    )}
                </Sidebar>
                {show &&
                    <div className="notification">
                        {sent ?
                        <div className="answer"><h1 onClick={handleClick}>X</h1><h3>Message Successfully Sent!</h3></div>
                        :
                        <div className="answer"><h1 onClick={handleClick}>X</h1><h3>Message Sending Failed...</h3></div>
                        }
                    </div>
                }
            </div>
        );
    }
}

export default ContactForm;

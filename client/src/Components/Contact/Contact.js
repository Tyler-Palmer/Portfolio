import "antd/dist/antd.css";
import React, { Component } from "react";
import { Keyframes, animated } from "react-spring/renderprops";
import { Avatar, Form, Icon, Input, Button } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import delay from "delay";

const Sidebar = Keyframes.Spring({
    // Slots can take arrays/chains,
    peek: [{ x: 0, from: { x: -100 }, delay: 500 }],
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
        { x: 0, opacity: 1, from: { x: -100, opacity: 0 }, delay: 600 }
        // { x: -100, opacity: 0, delay: 0 }
    ],
    open: { x: 0, opacity: 1, delay: 100 },
    close: { x: -100, opacity: 0, delay: 0 }
});

const { TextArea } = Input;

const items = [
    <Avatar src="https://semantic-ui.com/images/avatar2/large/elyse.png" />,
    <Input
        size="small"
        prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
        placeholder="Name"
    />,
    <Input
        size="small"
        prefix={<Icon type="mail" style={{ color: "rgba(0,0,0,.25)" }} />}
        placeholder="Email"
    />,
    <Input
        size="small"
        prefix={
            <Icon type="environment" style={{ color: "rgba(0,0,0,.25)" }} />
        }
        placeholder="Location"
    />,
    <Input
        size="small"
        prefix={
            <Icon type="shopping-cart" style={{ color: "rgba(0,0,0,.25)" }} />
        }
        placeholder="Project/Budget"
    />,
    <TextArea
        rows={4}
        prefix={<Icon type="smile-o" style={{ color: "rgba(0,0,0,.25)" }} />}
        placeholder="Comments/Suggestions"
    />,
    <Button
        size="small"
        type="primary"
        htmlType="submit"
        className="login-form-button"
        children="Submit"
    />
];

class Contact extends Component {
    constructor() {
        super();
        this.state = {
            open: undefined
        };
    }
    toggle = () =>
        this.setState(state => ({
            open: !state.open
        }));

    render() {
        const state =
            this.state.open === undefined
                ? "peek"
                : this.state.open
                ? "open"
                : "close";

        const icon = this.state.open ? "fold" : "unfold";

        return (
            <div
                style={{
                    width: "100vw",
                    height: "100vh",
                    backgroundColor: "#321142",
                }}
            >
                <Icon
                    type={`menu-${icon}`}
                    className="sidebar-toggle"
                    onClick={this.toggle}
                    style={{marginTop: '5vh'}}
                />
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
                                reverse={!this.state.open}
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
            </div>
        );
    }
}

export default Contact;

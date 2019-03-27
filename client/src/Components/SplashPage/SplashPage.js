import React, { Component } from "react";
import { Spring, config } from "react-spring/renderprops";
import styled, { css } from "styled-components";

const SplashLeft = styled.div`
    height: 200vh;
    width: 100vw;
    background-color: #6665dd;
    top: 0;
    left: 0;
    position: absolute;
`;

const hello = ["H", "E", "L", "L", "O", "."];

class SplashPage extends Component {
    constructor() {
        super();
        this.state = {
            changeColor: false,
            bool: false
        };
    }
    componentDidMount() {
        setTimeout(() => {
            this.setState(prevState => ({
                changeColor: !prevState.changeColor
            }));
        }, 3150);
        // setTimeout(() => {
        //     this.setState(prevState => ({
        //         bool: !prevState.bool
        //     }));
        // }, 5900);
    }

    render() {
        return (
            <div className="splash-container">
                <div className="hello-container">
                    <div className="hello">
                        {hello.map(each => (
                            <span className="letters">{each}</span>
                        ))}
                    </div>
                </div>
                {/* <div className="cube-container">
                    <div className="sk-folding-cube">
                        <div
                            className={
                                this.state.changeColor
                                    ? "sk-cube1 white"
                                    : "purple sk-cube1"
                            }
                        />
                        <div
                            className={
                                this.state.changeColor
                                    ? "sk-cube2 white"
                                    : "purple sk-cube2"
                            }
                        />
                        <div
                            className={
                                this.state.changeColor
                                    ? "sk-cube3 white"
                                    : "purple sk-cube3"
                            }
                        />
                        <div
                            className={
                                this.state.changeColor
                                    ? "sk-cube4 white"
                                    : "purple sk-cube4"
                            }
                        />
                    </div>
                </div> */}
                <Spring
                    from={{ opacity: 0, marginTop: -1000 }}
                    to={{ opacity: 1, marginTop: 0 }}
                    delay="1000"
                >
                    {props => <SplashLeft style={props} />}
                </Spring>
            </div>
        );
    }
}

export default SplashPage;

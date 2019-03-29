import React, { Component } from "react";
import { Spring } from "react-spring/renderprops";
import styled, { css } from "styled-components";
import { TweenMax } from "gsap";

const SplashLeft = styled.div`
    height: 200vh;
    width: 100vw;
    background-color: #6665dd;
    top: 0;
    left: 0;
    position: absolute;
`;

const ArrowWrapper = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    margin-top: 38vh;
    z-index: 130;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const hello = ["H", "E", "L", "L", "O", "."];

class SplashPage extends Component {
    constructor() {
        super();
        this.state = {
            changeColor: false,
            show: false,
            opacity: 0,
            timer: null
        };
    }

    fadingIn = () => {
        const timer = setInterval(() => {
          if (this.state.opacity >= 1) {
            clearInterval(timer);
        }
          this.setState({ opacity: this.state.opacity + 0.1 })
      }, 100);
    }

    componentDidMount() {
        // setTimeout(() => {
        //     this.setState(prevState => ({
        //         changeColor: !prevState.changeColor
        //     }));
        // }, 3150);
        setTimeout(() => this.setState({ show: true }, this.fadingIn), 3500)

        this.animateArrow = TweenMax.fromTo(
            "#arrow",
            0.95,
            { y: -20 },
            { y: 0, repeat: -1, yoyo: true }
        ).pause();
        // check out pause(), play(), reverse(), restart() methods \\
        this.animateArrow.play();
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
                <ArrowWrapper>
                    { this.state.show &&
                   <div id="arrow" style ={{opacity: this.state.opacity}}>
                   </div>
                    }
                </ArrowWrapper>
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

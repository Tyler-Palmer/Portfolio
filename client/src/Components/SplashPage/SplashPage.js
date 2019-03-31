import React, { Component } from "react";
import { Spring } from "react-spring/renderprops";
import styled from "styled-components";
import { TweenMax } from "gsap";

const SplashLeft = styled.div`
    height: 130vh;
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
    margin-top: 25vh;
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

    fadingInLetters = () => {
        const timer = setInterval(() => {
          if (this.state.opacity >= 1) {
            clearInterval(timer);
        }
          this.setState({ opacity: this.state.opacity + 0.1 })
      }, 100);
    }

    componentDidMount() {
        setTimeout(() => this.setState({ show: true }, this.fadingInLetters), 100)

        this.animateArrow = TweenMax.fromTo(
            "#arrow",
            0.95,
            { y: -10 },
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
                        {hello.map((each, i) => (
                            <span className="letters" key={i}>{each}</span>
                        ))}
                    </div>
                </div>
                <ArrowWrapper>
                   <div id="arrow">
                   </div>
                </ArrowWrapper>
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

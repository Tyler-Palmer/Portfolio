import React, { Component } from "react";
import { Spring } from "react-spring/renderprops";
import styled from "styled-components";
import { TweenMax } from "gsap";
import { Parallax, ParallaxLayer } from "react-spring/renderprops-addons";
import {withRouter} from 'react-router-dom'

const SplashLeft = styled.div`
    height: 200vh;
    width: 100vw;
    background-color: #321142;
    top: 0;
    left: 0;
    position: absolute;
`;

const ArrowWrapper = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    margin-top: -15vh;
    z-index: 130;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const hello = ["H", "E", "L", "L", "O", "."];

class SplashPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            changeColor: false,
            show: false,
            opacity: 0,
            timer: null
        };
        this._isMounted = false;
    }

    // fadingInLetters = () => {
    //     const timer = setInterval(() => {
    //         if (this.state.opacity >= 1) {
    //             clearInterval(timer);
    //         }
    //         this.setState({ opacity: this.state.opacity + 0.1 });
    //     }, 100);
    // };

    componentDidMount() {
        this._isMounted = true;
        // this.props.hideSplash()
        this._isMounted && setTimeout(
            () => this.setState({ show: true }),
            2500
        );

        // this.animateArrow = TweenMax.fromTo(
        //     "#arrow",
        //     0.95,
        //     { y: -10 },
        //     { y: 0, repeat: -1, yoyo: true }
        // ).pause();
        // this._isMounted && this.animateArrow.play();
    }

    componentWillUnmount() {
        this._isMounted = false;
     }
     
    render() {
        console.log(this.state)
        return (
            <div className="splash-container" onScroll={this.handleScroll}>
                <Parallax ref={ref => (this.parallax = ref)} pages={2}>
                    <ParallaxLayer
                        speed={1}
                        offset={0}
                        className="hello-container"
                    >   
                        {this.state.show &&
                        <div className="hello">
                            {hello.map((each, i) => (
                                <span className="letters" key={i}>
                                    {each}
                                </span>
                            ))}
                        </div>
                        }
                    </ParallaxLayer>
                    <ArrowWrapper>
                        <div
                            id="arrow"
                            style={{ opacity: this.state.opacity }}
                        />
                    </ArrowWrapper>
                    <Spring
                        from={{ opacity: 0, marginTop: -1000 }}
                        to={{ opacity: 1, marginTop: 0 }}
                    >
                        {props => <SplashLeft style={props} />}
                    </Spring>
                    <ParallaxLayer speed={1.5} offset={1}>
                        <div id="intro-container">
                            <div id="intro">
                                <h1>TP Design & Development</h1>
                                <h3>I'm a developer</h3>
                                <h5>
                                    I enjoy learning new skills and challenging
                                    myself to create interesting, useful and
                                    beautiful tools for the web
                                </h5>
                            </div>
                            <div id="programming" />
                        </div>
                    </ParallaxLayer>
                </Parallax>
            </div>
        );
    }
}

export default withRouter(SplashPage);

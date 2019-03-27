import React, { Component } from "react";
import { Spring } from "react-spring/renderprops";
import styled, { css } from "styled-components";

const SplashLeft = styled.div`
    height: 100vh;
    width: 100vw;
    background-color: #6665dd;
`;

class SplashPage extends Component {
    constructor() {
        super();
        this.state = [];
    }
    render() {
        return (
            <div className="splash-container">
                <div className="sk-folding-cube">
                    <div className="sk-cube1 sk-cube" />
                    <div className="sk-cube2 sk-cube" />
                    <div className="sk-cube4 sk-cube" />
                    <div className="sk-cube3 sk-cube" />
                </div>
                <Spring
                    from={{ opacity: 0, marginTop: -1000 }}
                    to={{ opacity: 1, marginTop: 0 }}
                    delay='3000'
                >
                    {props => <SplashLeft style={props} />}
                </Spring>
            </div>
        );
    }
}

export default SplashPage;

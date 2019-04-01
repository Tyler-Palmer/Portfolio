import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Nav from "./Components/Nav/Nav";
import Landing from "./Components/Landing/Landing";
import SplashPage from "./Components/SplashPage/SplashPage";
import Footer from "./Components/Footer/Footer";

class App extends Component {
    constructor() {
        super();
        this.state = {
            activeThing2: {
                id: null,
                ratio: 0
            }
        };
    }

    updateActive2 = params => {
        this.setState({
            activeThing2: params
        });
    };

    render() {
        return (
            <div className="app-wrapper">
                <SplashPage />
                <Nav activeThing2={this.state.activeThing2} />
                <Switch>
                    <Route
                        exact
                        path="/"
                        render={props => (
                            <Landing
                                {...props}
                                updateActive2={this.updateActive2}
                                activeThing2={this.state.activeThing2}
                            />
                        )}
                    />
                </Switch>
                <Footer />
            </div>
        );
    }
}

export default App;

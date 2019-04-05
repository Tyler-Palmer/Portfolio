import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Nav from "./Components/Nav/Nav";
import Landing from "./Components/Landing/Landing";
import SplashPage from "./Components/SplashPage/SplashPage";
import Contact from "./Components/Contact/Contact";
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

    componentDidMount() {
        const myObs = document.querySelectorAll(".obs");

        this.observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.IntersectionRatio > 0) {
                    console.log("entered view");
                } else {
                    console.log("out of view");
                }
            });
        });
        myObs.forEach(each => {
            this.observer.observe(each);
        });
    }

    render() {
        return (
            <div className="app-wrapper">
                <Switch>
                    <Route
                        exact
                        path="/"
                        render={props => (
                            <SplashPage {...props} className="obs" />
                        )}
                    />
                    <Nav activeThing2={this.state.activeThing2} />
                    <Route
                        path="/landing"
                        render={props => (
                            <Landing
                                {...props}
                                updateActive2={this.updateActive2}
                                activeThing2={this.state.activeThing2}
                                className="obs"
                            />
                        )}
                    />
                    <Route path="/contact" component={Contact} />
					<Footer />
                </Switch>
            </div>
        );
    }
}

export default App;

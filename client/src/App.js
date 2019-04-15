import React, { Component } from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import Nav from "./Components/Nav/Nav";
import Landing from "./Components/Landing/Landing";
import SplashPage from "./Components/SplashPage/SplashPage";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import { TransitionGroup, CSSTransition } from "react-transition-group";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeThing2: {
                id: null,
                ratio: 0
            },
            showSplash: true,
            showNav: true
        };
        this._isMounted = false;
    }

    updateActive2 = params => {
        this.setState({
            activeThing2: params
        });
    };

    hideSplash = () => {
        const { location } = this.props;
        if (location.pathname === "/contact") {
            this.setState({
                showSplash: false
            });
            console.log("pathname hid splash");
        }
        this.setState(prevState => ({
            showSplash: !prevState.showSplash
        }));
        console.log("other setState hid splash");
    };

    toggleNav = () => {
        this.setState(prevState => ({
            showNav: !prevState.showNav
        }));
    };

    componentDidMount() {
        this._isMounted = true;
        const myObs = document.querySelectorAll(".obs");
        const { location } = this.props;
        console.log(location.pathname);

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

    componentWillUnmount() {
        this._isMounted = false;
    }

    render() {
        const { location } = this.props;
        return (
            <div className="app-wrapper">
                {this.state.showSplash && (
                    <SplashPage className="obs" hideSplash={this.hideSplash} />
                )}
                {this.state.showNav && (
                    <Nav activeThing2={this.state.activeThing2} />
                )}
                <TransitionGroup>
                    <CSSTransition
                        key={location.key}
                        timeout={{ enter: 1000, exit: 1000 }}
                        classNames={"contact"}
                    >
                        <Switch location={location}>
                            <Route
                                exact
                                path="/"
                                render={props => (
                                    <Landing
                                        {...props}
                                        updateActive2={this.updateActive2}
                                        activeThing2={this.state.activeThing2}
                                        className="obs"
                                        hideSplash={this.hideSplash}
                                        showSplash={this.state.showSplash}
                                        toggleNav={this.toggleNav}
                                    />
                                )}
                            />
                            <Route
                                path="/Contact"
                                render={props => (
                                    <Contact
                                        {...props}
                                        toggleNav={this.toggleNav}
                                    />
                                )}
                            />
                        </Switch>
                    </CSSTransition>
                </TransitionGroup>
                <Footer />
            </div>
        );
    }
}

export default withRouter(App);

import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import { withContent } from "../../Context/ContentProvider";
import Nav from "../Nav/Nav";

class Landing extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeThing: {
                id: null,
                ratio: 0
            }
        };

        this.rootRef = React.createRef();
        this.singleRefs = this.props.things.reduce((acc, val) => {
            acc[val.id] = {
                ref: React.createRef(),
                id: val.id,
                ratio: 0
            };
            return acc;
        }, {});

        const callback = entries => {
            entries.forEach(
                entry =>
                    (this.singleRefs[entry.target.id].ratio =
                        entry.intersectionRatio)
            );
            const activeThing = Object.values(this.singleRefs).reduce(
                (acc, val) => (val.ratio > acc.ratio ? val : acc),
                this.state.activeThing
            );
            if (activeThing.ratio > this.state.activeThing.ratio) {
                this.setState({
                    activeThing
                });
                this.props.updateActive2(this.state.activeThing);
            }
        };

        this.observer = new IntersectionObserver(callback, {
            root: this.rootRef.current,
            threshold: new Array(101).fill(0).map((v, i) => i * 0.01)
        });
    }
    componentDidMount() {
        Object.values(this.singleRefs).forEach(value =>
            this.observer.observe(value.ref.current)
        );
    }

    render() {
        return (
            <Fragment>
                {/* <Nav activeThing={this.state.activeThing} /> */}
                <div className="landing-wrapper" ref={this.rootRef}>
                    {this.props.things.map(thing => (
                        <div
                            id={thing.id}
                            key={thing.id}
                            className="text-card"
                            ref={this.singleRefs[thing.id].ref}
                        >
                            <h1>{thing.headline.toString()}</h1>
                            <p>{thing.text.toString()}</p>
                            <h3>{thing.sub && thing.sub.toString()}</h3>
                            <div className="icon-container">
                                {thing.technologies &&
                                    thing.technologies.map(x => (
                                        <div className={x} key={x} />
                                    ))}
                            </div>
                            <h3>{thing.sub2 && thing.sub2.toString()}</h3>
                            <div className="list-container">
                                <ul>
                                    {thing.tools &&
                                        thing.tools.map(x => <li key={x}>{x}</li>)}
                                </ul>
                            </div>
                            <div className="projects-container">
                                {thing.headline === "Projects" &&
                                    thing.items.map(x => (
                                        <div className={x.class} key={x.class}>
                                            <h3>{x.title}</h3>
                                            <div className={`${x.class}pic`}></div>
                                            <h4>Tech:</h4>
                                            <ul className="tech">
                                            {
                                                x.tech.map(y =>(
                                                    <li>{y}</li>
                                                ))
                                            }
                                            </ul>
                                            <p>{x.description}</p>
                                        </div>
                                    ))
                                }
                            </div>
                            <div className="contact-container">
                                {thing.headline === "Contact" && (
                                    <Link
                                        onClick={this.props.hideSplash}
                                        to="/contact"
                                    >
                                        Contact
                                    </Link>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </Fragment>
        );
    }
}

export default withContent(Landing);

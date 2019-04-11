import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import { withContent } from "../../Context/ContentProvider";

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
                            {thing.headline === "About Me" && (
                                <Fragment>
                                    <div className="picture" />
                                    <h3>My name is Tyler</h3>
                                </Fragment>
                            )}
                            {thing.text && <p>{thing.text.toString()}</p>}
                            {thing.sub && <h3>{thing.sub.toString()}</h3>}
                            {thing.headline === "Tools for the Job" && (
                                <div className="icon-container">
                                    {thing.technologies &&
                                        thing.technologies.map(x => (
                                            <div className={x} key={x} />
                                        ))}
                                </div>
                            )}
                            {thing.sub2 && <h3>{thing.sub2.toString()}</h3>}
                            {thing.headline === "Tools for the Job" && (
                                <div className="list-container">
                                    <ul>
                                        {thing.tools &&
                                            thing.tools.map(x => (
                                                <li key={x}>{x}</li>
                                            ))}
                                    </ul>
                                </div>
                            )}
                            {thing.headline === "Projects" && (
                                <div className="projects-container">
                                    {thing.headline === "Projects" &&
                                        thing.items.map(x => (
                                            <div
                                                className={x.class}
                                                key={x.class}
                                            >
                                                <h3>{x.title}</h3>
                                                <div
                                                    className={`${x.class}pic`}
                                                />
                                                <div className="tech-container">
                                                    <h4>Tech:</h4>
                                                    <ul className="tech">
                                                        {x.tech.map(y => (
                                                            <li key={y}>
                                                                {y},
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                                <hr />
                                                <p>{x.description}</p>
                                                <ul className="links">
                                                    <a href={x.live}>
                                                        <li>Live</li>
                                                    </a>
                                                    <a href={x.git}>
                                                        <li>Git</li>
                                                    </a>
                                                </ul>
                                            </div>
                                        ))}
                                </div>
                            )}
                            {thing.headline === "Contact" && (
                                <div className="contact-container">
                                    <Link
                                        onClick={this.props.hideSplash}
                                        to="/contact"
                                    >
                                        Contact Form
                                    </Link>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </Fragment>
        );
    }
}

export default withContent(Landing);

import React, { Component } from "react";
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
        console.log(this.props.things);
        return (
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
                                    <div className={x} />
                                ))}
                        </div>
                    </div>
                ))}
            </div>
        );
    }
}

export default withContent(Landing);

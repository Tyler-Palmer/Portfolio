import React, { Component } from "react";
import { withContent } from "../../Context/ContentProvider";

class Landing extends Component {
    constructor(props){
        super(props)

        this.rootRef = React.createRef()
        this.singleRefs = this.props.things.reduce((acc, val) => {
            acc[val.id] = React.createRef()
            return acc
        }, {})

        const callback = entries => {
            console.log(entries)
        }

        this.observer = new IntersectionObserver(callback, {
            root: this.rootRef.current,
            threshold: new Array(101).fill(0).map((v,i) => i * 0.01),
        })
    }
    componentDidMount() {
        Object.values(this.singleRefs).forEach(value =>
            this.observer.observe(value.current),
            )
    }
    

  render() {
    console.log(this.props.things);
    return (
      <div  className="landing-wrapper"
            ref={this.rootRef}>
        {this.props.things.map(thing => (
          <div  id={thing.id} 
                key={thing.id} 
                className="text-card"
                ref={this.singleRefs[thing.id]}>
            <h1>{thing.headline.toString()}</h1>
            <p>{thing.text.toString()}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default withContent(Landing);

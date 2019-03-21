import React, { Component } from "react";
import { withContent } from "../../Context/ContentProvider";

class Landing extends Component {
  render() {
    console.log(this.props.things);
    return (
      <div className="landing-wrapper">
        {this.props.things.map(thing => (
          <div id={thing.id} key={thing.id} className="text-card">
            <h1>{thing.headline.toString()}</h1>
            <p>{thing.text.toString()}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default withContent(Landing);

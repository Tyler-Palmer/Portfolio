import React, { Component } from "react";
import { LoremIpsum } from "lorem-ipsum";

const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    min: 4,
    max: 10
  },
  wordsPerSentence: {
    max: 16,
    min: 4
  }
});
const example = lorem.generateParagraphs(3);

class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      things: [
        {
          id: "a",
          headline: "Javascript",
          text: example
        },
        {
          id: "b",
          headline: "React",
          text: example
        },
        {
          id: "c",
          headline: "NodeJS",
          text: example
        },
        {
          id: "d",
          headline: "Express",
          text: example
        },
        {
          id: "e",
          headline: "MongoDB",
          text: example
        }
      ]
    };
  }
  render() {
    console.log(this.state.things);
    return (
      <div className="landing-wrapper">
        {this.state.things.map(thing => (
          <div id={thing.id} key={thing.id} className="text-card">
            <h1>{thing.headline.toString()}</h1>
            <p>{thing.text.toString()}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default Landing;

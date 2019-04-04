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
const example = lorem.generateParagraphs(5);

const { Consumer, Provider } = React.createContext();

class ContentProvider extends Component {
    constructor() {
        super();
        this.state = {
            things: [
                {
                    id: "a",
                    headline: "About Me",
                    text:
                        "I've worn many hats over the years, the most recent of which is that of web developer. Some of my background includes work for small business, non-profit, consulting, events, high-adventure (bungee jumping), food and beverage, sales, photography, design, soil/mineral science, technical analysis and executive-management. I also am much more than my employment, in my free time I enjoy coding personal projects, learning new technologies, reading, rock climbing, skiing, slacklining, biking, hiking, camping and many more present participles."
                },
                {
                    id: "b",
                    headline: "Tools for the Job",
                    subheadline1: "technologies",
                    technologies: [
                        "html",
                        "css",
                        "javascript",
                        "react",
                        "nodejs",
                        "express",
                        "mongodb",
                        "API"
                    ],
                    subheadline2: "Tools",
                    tools: [
                    "Github",
                    "NPM",
                    "VSCode", 
                    "SASS",
                    "Styled Components",
                    "Bootstrap",
                    "Libraries",
                    "Imagination!"
                  ]
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
        return (
            <Provider
                value={{
                    ...this.state
                }}
            >
                {this.props.children}
            </Provider>
        );
    }
}

export const withContent = C => props => (
    <Consumer>{value => <C {...props} {...value} />}</Consumer>
);

export default ContentProvider;

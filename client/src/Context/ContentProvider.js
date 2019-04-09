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
                    text: "I've worn many hats over the years, the most recent of which is that of web developer. Some of my background includes work for small business, non-profit, consulting, high-adventure (bungee jumping), events, food and beverage, sales, photography, design, soil/mineral science, technical analysis and executive-management. I also am much more than my employment, in my free time I enjoy coding personal projects, learning new technologies, reading, rock climbing, skiing, slacklining, biking, hiking, camping and many more present participles. My greatest driving force in life is to leave a positive impact and to excel at what I do and do many things",
                    sub: "",
                    technologies: [],
                    sub2: "",
                    tools: []
                },
                {
                  id: "b",
                  headline: "Tools for the Job",
                  text: "",
                  sub: "</>",
                  technologies: [
                      "html",
                      "css",
                      "sass",
                      "javascript",
                      "react",
                      "nodejs",
                      "express",
                      "mongodb",
                      "api",
                      "bootstrap",
                      "photoshop",
                      "illustrator",
                      "indesign"
                  ],
                  sub2: "Additional tools",
                  tools: [
                  "Github",
                  "NPM",
                  "VSCode", 
                  "Styled Components",
                  "Libraries",
                  "Imagination!"
                ]
              },
                
                {
                    id: "c",
                    headline: "Projects",
                    text: "",
                    items: [
                        {
                            tile: "CSS Zen Garden",
                            tech: ["HTML", "CSS"],
                            description: "A fully responsive front-end site created as a clone of the original based solely on a PSD. This illustrates the ability to replicate ideas from a design team's mock-ups and implement those into a fully realized project. Landing page only.",
                            live: "",
                            git: "",
                            class: "zen"
                        },
                        {
                            title: "Business Time",
                            tech: ["HTML", "CSS"],
                            description: "This is a fully responsive front-end site created as a proof-of-concept for a theoretical yoga studio.",
                            live: "",
                            git: "",
                            class: "business"
                        },
                        {
                            title: "Mario Pest Control",
                            tech: ["HTML", "CSS", "Javascript"],
                            description: "A basic page created as an exercise to perform Mario-themed math equations.",
                            live: "",
                            git: "",
                            class: "mario"
                        },
                        {
                            title: "Personality Analyzer",
                            tech: ["React", "Express", "Node.js", "CSS", "API", "Axios"],
                            description: "This is a front-end site designed with an Express server to utilize the IBM Watson Personality Analyzer API and provideds interesting insight into text input.",
                            live: "",
                            git: "",
                            class: "ibm"
                        },
                        {
                            title: "Star Wars Bounty Hunter CRUD",
                            tech: ["React", "Express", "MongoDb", "Mongoose", "Node.js", "CSS"],
                            description: "A Star Wars themed, full-stack CRUD todo app utilizing a database.",
                            live: "",
                            git: "",
                            class: "bounty"
                        },
                        {
                            title: "Photography Website",
                            tech: ["React", "Express", "MongoDb", "Mongoose", "Node.js", "Axios", "CSS/SASS"],
                            description: "WORK IN PROGRESS: This is a full-stack website designed to host and display my own personal photography and inevitably sell prints directly from.",
                            live: "",
                            git: "",
                            class: "photo"
                        },
                        {
                            title: "Zillow",
                            tech: ["React", "Express", "MongoDb", "Mongoose", "Node.js", "API", "Axios", "SASS", "Data Scraping"],
                            description:"This is a full-stack group project between myself and a friend designed to replicate the main functions of the Xillow real estate website. It involves multiple 3rd party APIs, and user authentication.",
                            live: "",
                            git: "",
                            class: "zillow"
                        }
                    ]
                },
                {
                    id: "d",
                    headline: "Contact",
                    text: "I would love to connect, drop me a line on the contact form or reach out via any of the channels below. This website was written in React"
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

import React, {Component} from "react"

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

const { Consumer, Provider } = React.createContext()

class ContentProvider extends Component{
    constructor(){
        super()
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
            }
        }

    render(){
        return(
            <Provider value={{
                ...this.state
            }}>
                {this.props.children}
            </Provider>
        )
    }
}

export const withContent = C => props => (
    <Consumer>
        {value => <C {...props} {...value} />}
    </Consumer>
)

export default ContentProvider
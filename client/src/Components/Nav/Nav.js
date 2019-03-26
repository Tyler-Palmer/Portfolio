import React, { Component } from "react";
import { withContent } from "../../Context/ContentProvider";
import styled, { css } from "styled-components";

const Anchor = styled.a`
  display: block;
  padding-bottom: 1px;
  margin-bottom: 10px;
  text-decoration: none;
  color: #6665DD;

  ${props =>
    props.selected
      ? css`
          border-bottom: 2px solid rgba(0,0,0,.25);
          font-weight: bold;
          transition: 0.4s ease-in-out;
        `
      : null};
`;

class Nav extends Component {

  render() {
    return (
      <div className="nav-container">
        <div className="navigation">
          {this.props.things.map(thing => (
            <div key={thing.id}>
              <Anchor 
                href={`#${thing.id}`}
                selected={thing.id === this.props.activeThing2.id}
                >
                {thing.headline}
              </Anchor>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default withContent(Nav);

import React, { Component } from "react";
import { withContent } from "../../Context/ContentProvider";
import styled, { css } from "styled-components";

const Anchor = styled.a`
  display: block;
  padding-bottom: 1px;
  padding-right: 10px;
  margin-bottom: 10px;
  text-decoration: none;
  color: #6665DD;
  border-right: 2px solid rgba(0,0,0,.25);

  ${props =>
    props.selected
      ? css`
          border-right: 2px solid rgba(0,0,0,.25);
          border-bottom: 2px solid rgba(255,0,61,.8);
          padding-right: 10px;
          padding-bottom: 1px;
          font-weight: bold;
          transition: 0.4s ease-in-out;
        `
      : null};
`;

class Nav extends Component {

  render() {
    return (
      <div className="nav-container">
        <div className="logo"></div>
        <div className="navigation">
          {this.props.things.map(thing => (
            <div key={thing.id} className="nav-item">
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

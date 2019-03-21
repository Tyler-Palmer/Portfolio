import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import Nav from "./Components/Nav/Nav";
import Landing from "./Components/Landing/Landing";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="main-wrapper">
          <Nav />
          <Switch>
            <Route exact path="/" component={Landing} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;

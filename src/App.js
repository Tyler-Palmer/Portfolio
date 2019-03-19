import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Nav from "../Nav/Nav";
import Landing from "";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Switch>
          <Route exact path="/" component={Landing} />
        </Switch>
      </div>
    );
  }
}

export default App;

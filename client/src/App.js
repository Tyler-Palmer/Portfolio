import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import Nav from "./Components/Nav/Nav";
import Landing from "./Components/Landing/Landing";
import SplashPage from "./Components/SplashPage/SplashPage"

class App extends Component {
	constructor(){
		super()
		this.state ={
			activeThing2: {
                id: null,
                ratio: 0
            }
		}
	}

	updateActive2 = (params) => {
		this.setState({
			activeThing2 : params
		})
	}

  render() {
    return (
      <div>
        <SplashPage />
        <Header />
        <div className="main-wrapper">
          <Nav activeThing2 = {this.state.activeThing2}/>
          <Switch>
            <Route exact path="/" render = { props => <Landing
															{...props} 
															updateActive2 = {this.updateActive2}
															activeThing2 = {this.state.activeThing2}
															/>} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;

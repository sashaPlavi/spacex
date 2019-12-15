import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Mission from "./Mission";
import History from "./History";

import "./Main.css";

class Main extends Component {
  render() {
    return (
      <div className="main">
        <Switch>
          <Route path="/mission" component={Mission} />
          <Route path="/history" component={History} />
        </Switch>
        <p>this is main</p>
      </div>
    );
  }
}

export default Main;

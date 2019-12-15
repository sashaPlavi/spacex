import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Mission from "./Mission";
import History from "./History";
import Cores from "./Cores";
import Capsules from "./Capsules";
import Dragons from "./Dragons";

import "./Main.css";

class Main extends Component {
  render() {
    return (
      <div className="main">
        <Switch>
          <Route path="/mission" component={Mission} />
          <Route path="/history" component={History} />
          <Route path="/cores" component={Cores} />
          <Route path="/capsules" component={Capsules} />
          <Route path="/dragons" component={Dragons} />
        </Switch>
        <p>this is main</p>
      </div>
    );
  }
}

export default Main;

import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Mission from "../Mission.js";
import History from "../History.js";
import Cores from "../Cores.js";
import Capsules from "../Capsules.js";
import Dragons from "../Dragons.js";
import Info from "../info.js";
import LandingPad from "../LandingPad.js";
import Launches from "../Launches.js";
import LaunchPads from "../LaunchPads.js";
import Payloads from "../Payloads.js";
import Rockets from "../Rockets.js";
import Ships from "../Ships.js";
import Raodster from "../Raodster.js";
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
          <Route path="/info" component={Info} />
          <Route path="/LandingPad" component={LandingPad} />
          <Route path="/Launches" component={Launches} />
          <Route path="/LaunchPads" component={LaunchPads} />
          <Route path="/Payloads" component={Payloads} />
          <Route path="/Rockets" component={Rockets} />
          <Route path="/Ships" component={Ships} />
          <Route path="/Roadster" component={Raodster} />
        </Switch>
        <p>this is main</p>
      </div>
    );
  }
}

export default Main;

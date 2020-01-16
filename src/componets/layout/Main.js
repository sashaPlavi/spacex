import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Mission from "../pages/Mission";
import History from "../pages/History";
import Cores from "../pages/Cores.js";
import Capsules from "../pages/Capsules.js";
import Dragons from "../pages/Dragons.js";
import Info from "../pages/info.js";
import LandingPad from "../pages/LandingPad.js";
import Launches from "../pages/Launches.js";
import LaunchPads from "../pages/LaunchPads.js";
import Payloads from "../pages/Payloads.js";
import Rockets from "../pages/Rockets.js";
import Ships from "../pages/Ships.js";
import Raodster from "../pages/Raodster.js";
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

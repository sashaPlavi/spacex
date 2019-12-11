import React, { Component } from "react";
import { fechMission } from "./services/fetchMission";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mission: null
    };
  }

  componentDidMount() {
    this.getMission();
  }

  getMission() {
    fechMission.mission();
  }
  render() {
    return (
      <div>
        <p>this is main</p>
      </div>
    );
  }
}

export default Main;

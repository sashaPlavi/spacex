import React, { Component } from "react";
import { fechMission } from "./services/fetchMission";
import "./main.css";
import Mission from "./Mission";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      missions: {}
    };
  }

  componentDidMount() {
    this.getMission();
  }

  getMission() {
    fechMission.mission().then(res => {
      this.setState({ missions: res });
    });
  }
  render() {
    console.log(this.state.missions);

    return (
      <div className="main">
        <Mission missions={this.state.missions} />
        <p>this is main</p>
      </div>
    );
  }
}

export default Main;

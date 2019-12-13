import React, { Component } from "react";
import { fechMission } from "./services/fetchMission";
import "./main.css";
import Mission from "./Mission";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mission: {}
    };
  }

  componentDidMount() {
    this.getMission();
  }

  getMission() {
    fechMission.mission().then(res => {
      this.setState({ mission: res });
    });
  }
  render() {
    console.log(this.state.mission);

    return (
      <div className="main">
        <Mission />
        <p>this is main</p>
      </div>
    );
  }
}

export default Main;

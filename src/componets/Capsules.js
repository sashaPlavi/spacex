import React, { Component } from "react";
import "./Missions.css";
import { fechcapsules } from "../services/fetchcapsules";
class Capsules extends Component {
  constructor(props) {
    super(props);
    this.state = {
      capsules: {}
    };
  }

  componentDidMount() {
    this.getCapsules();
  }

  getCapsules() {
    fechcapsules.capsules().then(res => {
      this.setState({ capsules: res });
    });
  }
  render() {
    console.log(this.state.capsules);

    if (this.state.capsules[0]) {
      return (
        <div className="history">
          have something
          <div className="container">
            <div className="row">
              {this.state.capsules.map(cap => {
                return (
                  <div className="col-3  m-1 bg-light border-dark">
                    <p>{cap.capsule_id}</p> <br />
                    <p> reuse: {cap.reuse_count}</p>
                    <p> landings: {cap.landings}</p>
                    <p> status: {cap.status}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      );
    } else {
      return <p>loading...</p>;
    }
  }
}

export default Capsules;

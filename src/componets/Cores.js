import React, { Component } from "react";
import "./Missions.css";
import { fechcores } from "../services/fetchcores";
class Cores extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cores: {}
    };
  }

  componentDidMount() {
    this.getCores();
  }

  getCores() {
    fechcores.cores().then(res => {
      this.setState({ cores: res });
    });
  }
  render() {
    console.log(this.state.cores);

    if (this.state.cores[0]) {
      return (
        <div className="history">
          have something
          <div className="container">
            <div className="row">
              {this.state.cores.map(cor => {
                return (
                  <div className="col-3  m-1 bg-light border-dark">
                    <p>{cor.capsule_id}</p> <br />
                    <p> reuse: {cor.reuse_count}</p>
                    <p> wather landings: {cor.water_landing} </p>
                    <p> status: {cor.status}</p>
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

export default Cores;

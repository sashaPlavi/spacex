import React, { Component } from "react";

import { fechrocket } from "../../services/fechRockets";
class Rockets extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rockets: {}
    };
  }

  componentDidMount() {
    this.getRockets();
  }

  getRockets() {
    fechrocket.rockets().then(res => {
      this.setState({ rockets: res });
    });
  }
  render() {
    console.log(this.state.rockets);

    if (this.state.rockets[0]) {
      return (
        <div className="missons">
          <div className="container">
            <div className="row">
              have somthing
              {this.state.rockets.map((rocket, ind) => {
                return (
                  <div className="col-4  mb-1" key={ind}>
                    <div className="card h-100 ">
                      <div className="card-body ">
                        <h5 className="card-title">status: {rocket.active}</h5>
                        <h6 className="card-subtitle  text-muted">
                          cost per launch: {rocket.cost_per_launch}
                        </h6>
                        <p className=" overflow-auto">
                          height: {rocket.height}
                        </p>
                        <p className=" overflow-auto">
                          diameter: {rocket.diameter}
                        </p>
                        <p className=" overflow-auto">mass: {rocket.mass}</p>
                      </div>
                    </div>
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

export default Rockets;

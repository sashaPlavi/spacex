import React, { Component } from "react";

import { fetchroadster } from "../services/fetchroadsters";
class Roadsters extends Component {
  constructor(props) {
    super(props);
    this.state = {
      roadster: {}
    };
  }

  componentDidMount() {
    this.getRoadster();
  }

  getRoadster() {
    fetchroadster.roadster().then(res => {
      this.setState({ roadster: res });
    });
  }
  render() {
    console.log(this.state.roadster);

    if (this.state.roadster) {
      return (
        <div className="missons">
          <div className="container">
            <div className="row">
              have somthing return (
              <div className="card h-100 ">
                <div className="card-body ">
                  <h5 className="card-title">
                    name:{this.state.roadster.name}
                  </h5>
                  <h6 className="card-subtitle  text-muted">
                    launch date: {this.state.roadster.launch_date_utc}
                  </h6>
                  <p className=" overflow-auto">
                    loanch mass:{this.state.roadster.launch_mass_kg}
                  </p>
                  <p className=" overflow-auto">
                    orbit type:{this.state.roadster.orbit_type}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return <p>loading...</p>;
    }
  }
}

export default Roadsters;

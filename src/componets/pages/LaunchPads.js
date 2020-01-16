import React, { Component } from "react";

import { fechLaunchpads } from "../../services/fecthLaunchpads";
class LaunchPads extends Component {
  constructor(props) {
    super(props);
    this.state = {
      launchP: {}
    };
  }

  componentDidMount() {
    this.getLaunchP();
  }

  getLaunchP() {
    fechLaunchpads.launchP().then(res => {
      this.setState({ launchP: res });
    });
  }
  render() {
    console.log(this.state.launchP[0]);

    if (this.state.launchP[0]) {
      return (
        <div className="missons">
          have somthing
          <div className="container">
            <div className="row">
              {this.state.launchP.map(landing => {
                return (
                  <div className="col-4  mb-1" key={landing.id}>
                    <div className="card h-100 ">
                      <div className="card-body ">
                        <h5 className="card-title">
                          location name: {landing.location}
                          <br></br>
                          status: {landing.status}
                        </h5>
                        <h6 className="card-subtitle  text-muted">
                          region: {landing.region}
                        </h6>
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

export default LaunchPads;

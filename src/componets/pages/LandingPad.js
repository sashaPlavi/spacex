import React, { Component } from "react";
//import "./Missions.css";
import { fechLandingpads } from "../../services/fechLandingPads";
class LandingPad extends Component {
  constructor(props) {
    super(props);
    this.state = {
      landingP: {}
    };
  }

  componentDidMount() {
    this.getLandingP();
  }

  getLandingP() {
    fechLandingpads.landingP().then(res => {
      this.setState({ landingP: res });
    });
  }
  render() {
    console.log(this.state.landingP);

    if (this.state.landingP[0]) {
      return (
        <div className="missons">
          have somthing
          <div className="container">
            <div className="row">
              {this.state.landingP.map(landing => {
                return (
                  <div className="col-4  mb-1">
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

export default LandingPad;

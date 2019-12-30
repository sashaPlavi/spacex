import React, { Component } from "react";
//import "./Missions.css";
import { fechLaunches } from "../services/fechLaunches";
class Launches extends Component {
  constructor(props) {
    super(props);
    this.state = {
      launches: {}
    };
  }

  componentDidMount() {
    this.getLaunches();
  }

  getLaunches() {
    fechLaunches.launches().then(res => {
      this.setState({ launches: res });
    });
  }
  render() {
    console.log(this.state.launches);

    if (this.state.launches[0]) {
      return (
        <div className="missons">
          have somthing
          <div className="container">
            <div className="row">
              {this.state.launches.map(launch => {
                return (
                  <div className="col-4  mb-1">
                    <div className="card h-100 ">
                      <div className="card-body ">
                        <h5 className="card-title">
                          launching name: {launch.mission_name}
                          <br></br>
                          flight number: {launch.flight_number}
                        </h5>
                        <h6 className="card-subtitle  text-muted">
                          year: {launch.launch_year}
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

export default Launches;

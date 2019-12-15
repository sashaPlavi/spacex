import React, { Component } from "react";
import "./Missions.css";
import { fechdragons } from "./services/fetchdragons";
class Dragons extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dragons: {}
    };
  }

  componentDidMount() {
    this.getCores();
  }

  getCores() {
    fechdragons.dragons().then(res => {
      this.setState({ dragons: res });
    });
  }
  render() {
    console.log(this.state.dragons);

    if (this.state.dragons[0]) {
      return (
        <div className="history">
          have something
          <div className="container">
            <div className="row">
              {this.state.dragons.map(dra => {
                return (
                  <div className="col-3  m-1 bg-light border-dark">
                    <p>{dra.name}</p> <br />
                    <p> type: {dra.type}</p>
                    <p> type: {dra.thrusters_type} </p>
                    <p> dry: {dra.dry_mass_kg}</p>
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

export default Dragons;

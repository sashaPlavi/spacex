import React, { Component } from "react";

import { fechships } from "../services/fetchShips";
class Ships extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ships: {}
    };
  }

  componentDidMount() {
    this.getShips();
  }

  getShips() {
    fechships.ships().then(res => {
      this.setState({ ships: res });
    });
  }
  render() {
    console.log(this.state.ships);

    if (this.state.ships[0]) {
      return (
        <div className="missons">
          <div className="container">
            <div className="row">
              have somthing
              {this.state.ships.map((ship, ind) => {
                return (
                  <div className="col-4  mb-1" key={ind}>
                    <div className="card h-100 ">
                      <div className="card-body ">
                        <h5 className="card-title">name: {ship.ship_name}</h5>
                        <h6 className="card-subtitle  text-muted">
                          ship type: {ship.ship_type}
                        </h6>
                        <p className=" overflow-auto">role: {ship.roles}</p>
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

export default Ships;

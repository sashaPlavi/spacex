import React, { Component } from 'react';

import { fechMission } from '../../services/fetchMission';
class Mission extends Component {
  constructor(props) {
    super(props);
    this.state = {
      missions: {},
    };
  }

  componentDidMount() {
    this.getMission();
  }

  getMission() {
    fechMission.mission().then((res) => {
      this.setState({ missions: res });
    });
  }
  render() {
    if (this.state.missions[0]) {
      return (
        <div className="missons">
          <div className="container">
            <div className="row">
              {this.state.missions.map((mission) => {
                return (
                  <div className="col-4  mb-1">
                    <div className="card h-100 ">
                      <div className="card-body ">
                        <h5 className="card-title">
                          mission name: {mission.name}
                        </h5>
                        <h6 className="card-subtitle  text-muted">
                          manufacturers: {mission.manufacturers}
                        </h6>
                        {/* <p className=" overflow-auto">
                        description: {mission.description}
                        </p>
                      */}

                        <a target="blank" href={mission.wikipedia}>
                          <div className=" d-inline "> wikipedia</div>
                        </a>
                        <a target="blank" href={mission.website}>
                          <div className="d-inline"> webseit</div>
                        </a>
                        <a target="blank" href={mission.twitter}>
                          <div className="d-inline"> twitter</div>
                        </a>
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

export default Mission;
/*
 {missions.map(mission => {
        return (
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">{mission.name}</h5>
              <h6 className="card-subtitle mb-2 text-muted">
                manufacturers: {mission.manufacturers}
              </h6>
              <p className="card-text">description: {mission.descriprion}</p>
              <a href="#link" className="card-link">
                Card link
              </a>
              <a href="#another" className="card-link">
                Another link
              </a>
            </div>
          </div>
        );
      })}
    </div>
*/

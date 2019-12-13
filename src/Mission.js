import React from "react";
import "./Missions.css";

function mission(props) {
  console.log(props);
  let missions = props.missions;
  console.log(missions);

  if (missions[0]) {
    return (
      <div className="missons">
        {missions.map(mission => {
          return (
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">mission name: {mission.name}</h5>
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
    );
  } else {
    return <p>loading...</p>;
  }
}

export default mission;
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

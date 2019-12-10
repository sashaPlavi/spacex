import Axios from "axios";

class FechMission {
  mission = () => {
    const url = "https://api.spacexdata.com/v3/missions";
    return Axios.get(url)
      .then(res => {
        console.log(res);
      })
      .then(res => {
        console.log(res);
      });
  };
}

export const fechMission = new FechMission();

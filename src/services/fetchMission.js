import Axios from "axios";

import Mymission from "../enteties/mymission";

class FechMission {
  mission = () => {
    const url = "https://api.spacexdata.com/v3/missions";
    return Axios.get(url).then(apimissions => {
      const missions = apimissions.data.map(mission => new Mymission(mission));
      //console.log(apimissions);

      return missions;
      //console.log(res.data[0].mission_name);
    });
  };
}

export const fechMission = new FechMission();

import Axios from "axios";
import MyLaunches from "../enteties/myLaunches";

class FechLaunches {
  launches = () => {
    const url = "https://api.spacexdata.com/v3/launches";
    return Axios.get(url).then(apiLaunches => {
      const launches = apiLaunches.data.map(cop => new MyLaunches(cop));
      console.log(apiLaunches.data);

      return launches;
      //console.log(res.data[0].mission_name);
    });
  };
}

export const fechLaunches = new FechLaunches();

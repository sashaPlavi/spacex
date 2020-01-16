import Axios from "axios";
import Myroadster from "../enteties/myroadster";

class FetchRoadster {
  roadster = () => {
    const url = "https://api.spacexdata.com/v3/roadster";
    return Axios.get(url).then(apiroadster => {
      const roadster = new Myroadster(apiroadster.data);
      console.log(apiroadster);

      return roadster;
      //console.log(res.data[0].mission_name);
    });
  };
}

export const fetchroadster = new FetchRoadster();

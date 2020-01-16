import Axios from "axios";
import MyRocket from "../enteties/myrockets";

class FetchRockets {
  rockets = () => {
    const url = "https://api.spacexdata.com/v3/rockets";
    return Axios.get(url).then(apirocket => {
      const rocket = apirocket.data.map(roc => new MyRocket(roc));
      console.log(apirocket);

      return rocket;
      //console.log(res.data[0].mission_name);
    });
  };
}

export const fechrocket = new FetchRockets();

import Axios from "axios";
import MyShips from "../enteties/myships";

class FechShips {
  ships = () => {
    const url = "https://api.spacexdata.com/v3/ships";
    return Axios.get(url).then(apiships => {
      const ship = apiships.data.map(cop => new MyShips(cop));
      //console.log(apicapsules);

      return ship;
      //console.log(res.data[0].mission_name);
    });
  };
}

export const fechships = new FechShips();

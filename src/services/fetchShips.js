import Axios from "axios";
import MyShips from "../enteties/myships";

class FechShips {
  ships = () => {
    const url = "https://api.spacexdata.com/v3/ships";
    return Axios.get(url).then(apiships => {
      const ship = apiships.data.map(cop => new MyShips(cop));
      console.log(apiships);

      return ship;
      //console.log(ship);
    });
  };
}

export const fechships = new FechShips();

import Axios from "axios";
import Mydragons from "../enteties/mydragons";

class FechDragons {
  dragons = () => {
    const url = "https://api.spacexdata.com/v3/dragons";
    return Axios.get(url).then(apidragons => {
      const dragons = apidragons.data.map(dra => new Mydragons(dra));
      console.log(apidragons);

      return dragons;
      //console.log(res.data[0].mission_name);
    });
  };
}

export const fechdragons = new FechDragons();

import Axios from "axios";
import Mycores from "../enteties/mycores";

class FechCores {
  cores = () => {
    const url = "https://api.spacexdata.com/v3/cores";
    return Axios.get(url).then(apicores => {
      const cores = apicores.data.map(cor => new Mycores(cor));
      console.log(apicores);

      return cores;
      //console.log(res.data[0].mission_name);
    });
  };
}

export const fechcores = new FechCores();

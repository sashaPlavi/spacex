import Axios from "axios";
import Mycapsules from "../enteties/mycapsules";

class FechCapsules {
  capsules = () => {
    const url = "https://api.spacexdata.com/v3/capsules";
    return Axios.get(url).then(apicapsules => {
      const capsules = apicapsules.data.map(cop => new Mycapsules(cop));
      //console.log(apicapsules);

      return capsules;
      //console.log(res.data[0].mission_name);
    });
  };
}

export const fechcapsules = new FechCapsules();

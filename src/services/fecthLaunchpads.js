import Axios from "axios";
import MyLaunchP from "../enteties/myLandingp";

class FechLaunchPads {
  launchP = () => {
    const url = "https://api.spacexdata.com/v3/launchpads";
    return Axios.get(url).then(apiLaunchp => {
      const launchPads = apiLaunchp.data.map(cop => new MyLaunchP(cop));
      console.log(apiLaunchp);

      return launchPads;
      //console.log(res.data[0].mission_name);
    });
  };
}

export const fechLaunchpads = new FechLaunchPads();

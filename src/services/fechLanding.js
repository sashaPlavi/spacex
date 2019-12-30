import Axios from "axios";
import MyLandingP from "../enteties/myLandings";

class FechLanding {
  landingP = () => {
    const url = "https://api.spacexdata.com/v3/launchpads";
    return Axios.get(url).then(apiLandings => {
      const landings = apiLandings.data.map(cop => new MyLandingP(cop));
      console.log(apiLandings);

      return landings;
      //console.log(res.data[0].mission_name);
    });
  };
}

export const fechLandings = new FechLanding();

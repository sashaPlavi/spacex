import Axios from "axios";
import Mypayloads from "../enteties/myPayloads";

class FechPayloads {
  payloads = () => {
    const url = "https://api.spacexdata.com/v3/payloads";
    return Axios.get(url).then(apipaylods => {
      const payloads = apipaylods.data.map(cop => new Mypayloads(cop));
      //console.log(apicapsules);

      return payloads;
      //console.log(res.data[0].mission_name);
    });
  };
}

export const fechpayloads = new FechPayloads();

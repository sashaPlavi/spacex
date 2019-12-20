import Axios from "axios";
import Myinfo from "../enteties/myinfo";

class FetchInfo {
  infos = () => {
    const url = "https://api.spacexdata.com/v3/info";
    return Axios.get(url).then(apiinfo => {
      const info = new Myinfo(apiinfo.data);
      //console.log(apiinfo);

      return info;
      //console.log(res.data[0].mission_name);
    });
  };
}

export const fetchInfo = new FetchInfo();

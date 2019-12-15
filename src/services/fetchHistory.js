import Axios from "axios";

import Myspacexhistory from "../enteties/myspacexhistory";

class FechHistory {
  history = () => {
    const url = "https://api.spacexdata.com/v3/history";
    return Axios.get(url).then(apihistory => {
      const history = apihistory.data.map(his => new Myspacexhistory(his));
      console.log(apihistory);

      return history;
      //console.log(res.data[0].mission_name);
    });
  };
}

export const fechhistory = new FechHistory();

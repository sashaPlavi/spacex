class MyLandings {
  constructor(apiLnadings) {
    this.id = apiLnadings.id;
    this.status = apiLnadings.status;
    this.location = apiLnadings.location.name;
    this.region = apiLnadings.location.region;
  }
}

export default MyLandings;

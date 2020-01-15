class MyLaunchP {
  constructor(apiLaunchp) {
    this.id = apiLaunchp.id;
    this.status = apiLaunchp.status;
    this.location = apiLaunchp.location.name;
    this.region = apiLaunchp.location.region;
  }
}

export default MyLaunchP;

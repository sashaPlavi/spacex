class MyLaunches {
  constructor(apiLaunches) {
    console.log(apiLaunches);
    this.flight_number = apiLaunches.flight_number;
    this.mission_name = apiLaunches.mission_name;
    this.launch_year = apiLaunches.launch_year;
    this.rocket = apiLaunches.rocket.rockes_id;
    this.rocket_name = apiLaunches.rocket.rocket_name;
    this.rocket_type = apiLaunches.rocket.rocket_type;
  }
}

export default MyLaunches;

class MyRocket {
  constructor(apirocket) {
    this.id = apirocket.id;
    this.active = apirocket.active;
    this.stages = apirocket.stages;
    this.boosters = apirocket.boosters;
    this.cost_per_launch = apirocket.cost_per_launch;
    this.success_rate_pct = apirocket.success_rate_pct;
    this.first_flight = apirocket.first_flight;
    this.country = apirocket.country;
    this.company = apirocket.company;
    this.height = apirocket.height.meters;

    this.diameter = apirocket.diameter.meters;

    this.mass = apirocket.mass.kg;
  }
}

export default MyRocket;

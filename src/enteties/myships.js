class MyShip {
  constructor(apiship) {
    this.ship_id = apiship.ship_id;
    this.ship_name = apiship.ship_name;
    this.ship_model = apiship.ship_model;
    this.ship_type = apiship.ship_type;
    this.roles = apiship.roles[0];
  }
}

export default MyShip;

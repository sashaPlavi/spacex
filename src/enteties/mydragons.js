class MyDragons {
  constructor(apidragons) {
    this.id = apidragons.id;
    this.name = apidragons.name;
    this.type = apidragons.type;
    this.active = apidragons.active;
    this.crew_capacity = apidragons.crew_capacity;
    this.sidewall_angle_deg = apidragons.sidewall_angle_deg;
    this.orbit_duration_yr = apidragons.orbit_duration_yr;
    this.dry_mass_kg = apidragons.dry_mass_kg;
    this.dry_mass_lb = apidragons.dry_mass_lb;
    this.first_flight = apidragons.first_flight;
    this.thrusters_type = apidragons.thrusters.type;
    this.thrusters_amount = apidragons.thrusters.amount;
    this.thrusters_pods = apidragons.thrusters.pods;
    this.thrusters_fuel_1 = apidragons.thrusters.fuel_1;
    this.thrusters_fuel_2 = apidragons.thrusters.fuel_2;
    //this.thrusters_thrust_kN = apidragons.thrusters.thrust.kN;
    //this.thrusters_thrust_lbf = apidragons.thrusters.thrust.lbf;
  }
}

export default MyDragons;

class MyRoadster {
  constructor(apiroadster) {
    this.name = apiroadster.name;
    this.launch_date_utc = apiroadster.launch_date_utc;

    this.launch_mass_kg = apiroadster.launch_mass_kg;

    this.norad_id = apiroadster.norad_id;

    this.orbit_type = apiroadster.orbit_type;
  }
}
export default MyRoadster;

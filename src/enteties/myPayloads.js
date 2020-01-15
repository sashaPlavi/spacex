class MyPayloads {
  constructor(apiPayloads) {
    this.payload_id = apiPayloads.payload_id;
    this.norad_id = apiPayloads.norad_id;
    this.nationality = apiPayloads.nationality;
    this.manufacturer = apiPayloads.manufacturer;
    this.payload_type = apiPayloads.payload_type;
    this.payload_mass_kg = apiPayloads.payload_mass_kg;
    this.payload_mass_lbs = apiPayloads.payload_mass_lbs;
    this.orbit = apiPayloads.orbit;
  }
}

export default MyPayloads;

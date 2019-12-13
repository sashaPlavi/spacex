class Mymission {
  constructor(apimission) {
    console.log(apimission);
    this.name = apimission.mission_name;
    this.id = apimission.mission_id;
    this.manufacturers = apimission.manufacturers;
    this.payload = apimission.payload_ids;
    this.wikipedia = apimission.wikipedia;
    this.website = apimission.website;
    this.twitter = apimission.twitter;
    this.description = apimission.description;
  }
}

export default Mymission;

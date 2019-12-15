class Mycapsules {
  constructor(apicapsules) {
    this.capsule_serial = apicapsules.capsule_serial;
    this.capsule_id = apicapsules.capsule_id;
    this.status = apicapsules.status;
    this.original_launch = apicapsules.original_launch;
    this.mission = apicapsules.missions.name;
    this.landings = apicapsules.landings;
    this.type = apicapsules.type;
    this.details = apicapsules.details;
    this.reuse_count = apicapsules.reuse_count;
  }
}

export default Mycapsules;

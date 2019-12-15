class Mycores {
  constructor(apicores) {
    this.capsule_serial = apicores.capsule_serial;
    this.capsule_id = apicores.capsule_id;
    this.status = apicores.status;
    this.original_launch = apicores.original_launch;
    this.mission = apicores.missions.name;
    this.landings = apicores.landings;
    this.type = apicores.type;
    this.details = apicores.details;
    this.reuse_count = apicores.reuse_count;
  }
}

export default Mycores;

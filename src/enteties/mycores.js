class Mycores {
  constructor(apicores) {
    this.core_serial = apicores.core_serial;
    this.block = apicores.block;
    this.status = apicores.status;
    this.original_launch = apicores.original_launch;
    this.mission = apicores.missions.name;
    this.reuse_count = apicores.reuse_count;
    this.rtls_attempts = apicores.rtls_attempts;
    this.rtls_landings = apicores.rtls_landings;
    this.asds_attempts = apicores.asds_attempts;
    this.asds_landings = apicores.asds_landings;
    this.water_landing = apicores.water_landing;
    this.details = apicores.details;
  }
}
export default Mycores;

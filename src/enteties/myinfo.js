class Myinfo {
  constructor(apiinfo) {
    this.name = apiinfo.name;
    this.founder = apiinfo.founder;
    this.founded = apiinfo.founded;
    this.employees = apiinfo.employees;
    this.vehicles = apiinfo.vehicles;
    this.launch_sites = apiinfo.launch_sites;
    this.test_sites = apiinfo.test_sites;
    this.ceo = apiinfo.ceo;
    this.cto = apiinfo.cto;
    this.coo = apiinfo.coo;
    this.cto_propulsion = apiinfo.cto_propulsion;
    this.summary = apiinfo.summary;
  }
}

export default Myinfo;

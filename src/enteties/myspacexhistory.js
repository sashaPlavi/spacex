class Myspacexhistory {
  constructor(apihistory) {
    this.id = apihistory.id;
    this.title = apihistory.title;
    this.event_date = apihistory.event_date_utc;
    this.flight_number = apihistory.flight_number;
    this.details = apihistory.details;
    this.article = apihistory.links.article;
    this.wikipedia = apihistory.links.wikipedia;
  }
}

export default Myspacexhistory;

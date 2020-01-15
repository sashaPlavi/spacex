import React, { Component } from "react";

import { fechpayloads } from "../services/fetchPayloads";
class Payloads extends Component {
  constructor(props) {
    super(props);
    this.state = {
      payloads: {}
    };
  }

  componentDidMount() {
    this.getPayloads();
  }

  getPayloads() {
    fechpayloads.payloads().then(res => {
      this.setState({ payloads: res });
    });
  }
  render() {
    console.log(this.state.payloads);

    if (this.state.payloads[0]) {
      return (
        <div className="missons">
          <div className="container">
            <div className="row">
              have somthing
              {this.state.payloads.map((payload, ind) => {
                return (
                  <div className="col-4  mb-1" key={ind}>
                    <div className="card h-100 ">
                      <div className="card-body ">
                        <h5 className="card-title">
                          payload name: {payload.payload_id}
                        </h5>
                        <h6 className="card-subtitle  text-muted">
                          manufacturers: {payload.nationality}
                        </h6>
                        <p className=" overflow-auto">orbit: {payload.orbit}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      );
    } else {
      return <p>loading...</p>;
    }
  }
}

export default Payloads;

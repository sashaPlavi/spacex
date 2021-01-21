import React, { Component } from 'react';

import { fechhistory } from '../../services/fetchHistory';
class History extends Component {
  constructor(props) {
    super(props);
    this.state = {
      history: {},
    };
  }

  componentDidMount() {
    this.getHistory();
  }

  getHistory() {
    fechhistory.history().then((res) => {
      this.setState({ history: res });
    });
  }
  render() {
    console.log(this.state.history);

    if (this.state.history[0]) {
      return (
        <div className="history">
          have something
          <div className="container">
            <div className="row">
              {this.state.history.map((his) => {
                return (
                  <div className="col-3  m-1 bg-light border-dark">
                    <p>{his.title}</p> <br />
                    <p> event date:{his.event_date}</p>
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

export default History;

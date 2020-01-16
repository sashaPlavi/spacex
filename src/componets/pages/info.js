import React, { Component } from "react";
import "./Info.css";
import { fetchInfo } from "../../services/fetchInfo";
class Info extends Component {
  constructor(props) {
    super(props);
    this.state = {
      info: {}
    };
  }

  componentDidMount() {
    this.getInfo();
  }

  getInfo() {
    fetchInfo.infos().then(res => {
      this.setState({ info: res });
    });
  }
  render() {
    console.log(this.state.info);
    const info = this.state.info;
    // const keys = Object.keys(info);
    // const value = Object.values(value);
    const items = [];

    //const [keys, value] of info.entries();
    console.log("items:" + items);

    for (let [key, value] of Object.entries(info)) {
      console.log(`${key}: ${value}`);
      items.push(<li key={key}>{value}</li>);
    }

    if (this.state.info) {
      return (
        <div className="history">
          <div className="bg-light">{items}</div>
        </div>
      );
    } else {
      return <p>loading...</p>;
    }
  }
}

export default Info;

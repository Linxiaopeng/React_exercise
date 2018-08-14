import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./index.css";

class House extends Component {
  render() {
    return (
      <div className="house">
        <Room />
        <Bathroom />
      </div>
    );
  }
}

class Room extends Component {
  render() {
    return (
      <div className="room">
        <Man />
        <Dog />
        <Dog />
      </div>
    );
  }
}

class Bathroom extends Component {
  render() {
    return <div className="bathroom" />;
  }
}

class Man extends Component {
  render() {
    return <div className="man" />;
  }
}

class Dog extends Component {
  render() {
    return <div className="dog" />;
  }
}

ReactDOM.render(<House />, document.getElementById("root"));

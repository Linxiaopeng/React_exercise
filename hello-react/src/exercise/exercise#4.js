// #4 用 React.js 组建的房子

// 一个房子里面有一个房间和一个洗手间，房间里面有一个人和两条狗。
// 请你完成组件：House，Room，Bathroom，Man，Dog，它们的最外层都用 div 标签包裹起来，类名分别为：house，room，bathroom，man，dog。
// 组件的实现应该具有上述的嵌套关系。

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

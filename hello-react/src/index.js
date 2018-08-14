import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./index.css";

class Body extends Component {
  getNotificationCount(count) {
    const isEmpty = count <= 0 ? true : false;
    const message = (
      <span>
        有({count})条未读消息
      </span>
    );
    const empty = <span>没有未读消息</span>;
    return isEmpty ? empty : message;
  }
  render() {
    return <div>{this.getNotificationCount(1)}</div>;
  }
}

ReactDOM.render(<Body />, document.getElementById("root"));

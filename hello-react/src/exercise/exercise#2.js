// #2 用 React.js 构建未读消息组件

// 使用 React.js 构建一个未读消息组件 Notification。
// 通过 getNotificationsCount() 来获取未读消息的数量 ，如果有未读消息 N 条，而且 N > 0，那么 Notification 组件渲染显示：
// <span>有(N)条未读消息</span>
// 否则显示：
// <span>没有未读消息</span>

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

// #5 不能摸的狗（一）

// 有一只狗，不允许别人摸它，一旦摸它就会叫，然后就跑了。
// 完成 Dog 组件，当用户点击的时候会执行自身的 bark 和 run 方法。

import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./index.css";

class Dog extends Component {
  bark() {
    console.log("bark");
  }

  run() {
    console.log("run");
  }

  handleClick() {
    this.bark();
    this.run();
  }

  render() {
    return <div onClick={this.handleClick.bind(this)}>DOG</div>;
  }
}

ReactDOM.render(<Dog />, document.getElementById("root"));

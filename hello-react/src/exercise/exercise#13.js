// #13 黑色边框的容器组件

// 实现一个组件 BlackBorderContianer，它会把作为它的嵌套结构的 每个直接子元素 都用一个黑色边框的 div 包裹起来.
// 最后的 div.name 和 p.age 都具有一层黑色边框（1px solid #000000）外层结构。

import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./index.css";

class BlackBorderContainer extends Component {
  render() {
    return <div className="blackBorder">{this.props.children}</div>;
  }
}

ReactDOM.render(
  <BlackBorderContainer>
    <h2>React.js</h2>
    <h4>This is content</h4>
    Input:
    <input />
  </BlackBorderContainer>,
  document.getElementById("root")
);

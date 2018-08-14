// #3 JSX 元素变量

// 用 JSX 完成两个变量的定义：
// 第一个变量 title 为一个具有类名为 title 的 <h1> 元素，其内容为 ScriptOJ；
// 第二个变量 page 为一个具有类名为 content 的 <div> 元素，将之前定义的 title 变量插入其中作为它的内容。

import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./index.css";

class Body extends Component {
  render() {
    const titleClass='title';
    const contentClass='content';
    const title=<h1 className={titleClass}>React</h1>
    const page=<div className={contentClass}>{title}</div>
    return <div>{page}</div>;
  }
}

ReactDOM.render(<Body />, document.getElementById("root"));

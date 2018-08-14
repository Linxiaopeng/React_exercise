// #1 用 React.js 在页面上渲染标题

// 在页面上增加一个 id 为 root 的 <div> 元素。然后请你完成一个 renderContent 函数，这个函数会把传入的任意字符串都包装到一个 <h1> 元素中并且渲染到页面上。例如：
// renderContent('Hello World')
// 页面上就有相应的内容：
// <div id='root'>
//   <h1>Hello World</h1>
// </div>

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

function renderContent(content) {
  ReactDOM.render(<h1>{content}</h1>, document.getElementById("root"));
}

renderContent("Hello World");

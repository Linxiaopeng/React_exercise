// import React, { Component } from "react";
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

// class Header extends Component {
//   render() {
//     return (
//       <div>
//         <h1>React 小书</h1>
//         <h2> render title </h2>
//       </div>
//     );
//   }
// }

// ReactDOM.render(<Header />, document.getElementById("root"));

function renderContent(content) {
  ReactDOM.render(<h1>{content}</h1>, document.getElementById("root"));
}

renderContent("Hello World");

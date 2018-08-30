import React, { Component } from "react";
import Star from "./Star.svg";
import "./App.css";

class NavTitle extends Component {
  render() {
    return (
      <div className="Nav-container">
        <img src={Star} className="Nav-icon" alt="star" />
        <h1 className="Nav-title">Today</h1>
      </div>
    );
  }
}

class ButtonAddTask extends Component {
  render() {
    return (
      <div className="Botton-addTask-contaioner">
        <button className="Button-addTask" />
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <NavTitle />
        </header>
        <footer>
          <ButtonAddTask />
        </footer>
      </div>
    );
  }
}

export default App;

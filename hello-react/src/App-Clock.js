import React, { Component } from "react";
import ReactDOM from "react-dom";

class Clock extends Component {
  constructor() {
    super();
    this.state = {
      date: new Date()
    };
  }

  componentWillMount() {
    this.timer = setInterval(() => {
      this.setState({ date: new Date() });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    return (
      <div>
        <h1>
          <p>Time is</p>
          {this.state.date.toLocaleTimeString()}
        </h1>
      </div>
    );
  }
}

class Index extends Component {
  constructor() {
    super();
    this.state = { isShowClock: true };
  }

  handleShowOrHide() {
    this.setState({
      isShowClock: !this.state.isShowClock
    });
  }

  render() {
    return (
      <div>
        {this.state.isShowClock ? <Clock /> : null}
        <button onClick={this.handleShowOrHide.bind(this)}>
          Show Or Hide Clock
        </button>
      </div>
    );
  }
}

ReactDOM.render(<Index />, document.getElementById("root"));

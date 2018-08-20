// #9 百分比换算器

// 做一个百分比换算器，需要你完成三个组件：
// <Input />：封装了原生的<input />，可以输入任意数字
// <PercentageShower />：实时 显示 <Input /> 中的数字内容，但是需要把它转换成百分比，例如 <Input /> 输入的是 0.1，那么就要显示 10.00%，保留两位小数。
// <PercentageApp />：组合上述两个组件。

import React, { Component } from "react";
import ReactDOM from "react-dom";

class Input extends Component {
  constructor() {
    super();
    this.state = {
      value: ""
    };
  }
  handleChange = e => {
    this.setState({
      value: e.target.value
    });
    if (this.props.onChange) {
      this.props.onChange({ value: e.target.value });
    }
  };
  render() {
    return (
      <div>
        <input
          onChange={this.handleChange}
          value={this.state.value}
          type="number"
        />
      </div>
    );
  }
}

class PercentageShower extends Component {
  render() {
    return <div>{this.props.value}</div>;
  }
}

class PercentageApp extends Component {
  constructor() {
    super();
    this.state = {
      value: ""
    };
  }
  handleChange = value => {
    console.log(value);
    if (!value) return;
    if (!value.value) return;
    let values = value.value * 100;
    this.setState({
      value: values.toFixed(2) + "%"
    });
  };
  render() {
    return (
      <div>
        <Input onChange={this.handleChange} />
        <PercentageShower value={this.state.value} />
      </div>
    );
  }
}

ReactDOM.render(<PercentageApp />, document.getElementById("root"));

// #12 覆盖默认样式

import React from "react";
import ReactDOM from "react-dom";

const getDefaultStyledPost = defaultStyle => {
  /* TODO */

  return props => <p style={{ ...defaultStyle, ...props.style }} />;
};

ReactDOM.render(<getDefaultStyledPost />, document.getElementById("root"));

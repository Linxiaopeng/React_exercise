// #11 获取文本的高度

// 完成 Post 组件，接受一个字符串的 content 作为 props，Post 会把它显示到自己的 <p> 元素内。
// 并且，点击 <p> 元素的时候，会使用 console.log 把元素的高度打印出来。

import React from "react";
import ReactDOM from "react-dom";

const Post = props => {
  return (
    <p
      ref={p => {
        this.p = p;
      }}
      onClick={() => console.log(this.p.clientHeight)}
    >
      {props.content}
    </p>
  );
};

ReactDOM.render(<Post />, document.getElementById("root"));

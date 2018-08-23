# React 学习笔记

## Lesson 5: React.js 基本环境安装

### 安装 React.js

安装 `create-react-app`，在控制台中输入 npm 命令： 
```c
npm install -g create-react-app 
```

构建 `react` 前端工程，在控制台中输入 npm 命令： 
``` 
create-react-app hello-react 
```

启动工程 `hello-react`，在控制台中输入 npm 命令： 
```
cd hello-react
npm start
```

## Lesson 6: 使用 JSX 描述 UI 信息

### 练习使用 React.js 渲染标题

1. 首先将头部 `import React, { Component } from "react";` 中的 `{ Component }` 去掉，因为此处暂时没用到组件，若是不删掉会报错

2. `function` 部分代码如下：
```javascript
function renderContent(content) {
   ReactDOM.render(<h1>{content}</h1>,
   document.getElementById("root"));
```

3. `render` 部分代码如下：
```javascript
renderContent("Hello World");
```

4. 检查 `.../public/index.html` 的文档结构中是否引入 `<div id="root"></div>` 文件

## Lesson 7: 组件的 render 方法

`render` 方法返回并列多个 JSX 元素是不合法的，需要将外层元素包裹起来。

错误做法：
```javascript
render(){
    return(
        <div>A</div>
        <div>B</div>
    )
}
```

正确做法：
```javascript
render () {
  return (
    <div>
      <div>A</div>
      <div>B</div>
    </div>
  )
}
```

### 插入表达式
JSX 中可以插入 JavaScript 表达式，如 `const` 语句

表达式不仅可以作用在标签内部，也可以用在标签属性上，如：
```javascript
render () {
  const className = 'header'
  return (
    <div className={className}>
      <h1>Hello React</h1>
    </div>
  )
}
```

表达式中也可以加入条件返回：
```javascript
render () {
  const isGoodWord = true
  return (
    <div>
      <h1>
        Hello React
        {isGoodWord
          ? <strong> is good</strong>
          : <span> is not good</span>
        }
      </h1>
    </div>
  )
}
```

当条件返回 `null` 时就可以通过条件返回来隐藏元素：
```javascript
render () {
  const isGoodWord = true
  return (
    <div>
      <h1>
        Hello React
        {isGoodWord
          ? <strong> is good</strong>
          : null
        }
      </h1>
    </div>
  )
}
```

JSX 元素也可以被赋予变量：
```javascript
render () {
  const isGoodWord = true
  const goodWord = <strong> is good</strong>
  const badWord = <span> is not good</span>
  return (
    <div>
      <h1>
        Hello React
        {isGoodWord ? goodWord : badWord}
      </h1>
    </div>
  )
}
```

## Lesson 8: 组件的组合、嵌套和组件树

自定义的组件都必须要用大写字母开头，普通的 HTML 标签都用小写字母开头

## Lesson 9: 事件监听

需要为某个元素监听某个事件的时候，只需要简单地给它加上 `on*` 就可以了

这些 `on*` 的事件监听只能用在普通的 `HTML` 的标签上，而不能用在组件标签上

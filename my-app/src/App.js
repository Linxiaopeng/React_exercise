import React, { Component } from "react";
import ReactDOM from "react-dom";
import TodoList from "./components/TodoList";
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
      <div className="Botton-addTask-container">
        <button className="Button-addTask" />
      </div>
    );
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };
  }

  generateId() {
    return Math.floor(Math.random() * 9000) + 1000;
  }

  handleToggleComplete(taskId) {
    var todos = this.state.todos;
    for (var i in todos) {
      if (todos[i].id === taskId) {
        todos[i].isCompleted = !todos[i].isCompleted;
        break;
      }
    }
    this.setState({ todos });
  }
  handleRemoveTask(taskId) {
    var todos = this.state.todos;
    todos = todos.filter(task => {
      return task.id !== taskId;
    });
    this.setState({ todos });
  }
  handleAdd() {
    var taskName = ReactDOM.findDOMNode(this.refs.taskname).value.trim();
    if (!taskName) {
      return "";
    }
    var taskId = this.generateId();
    var todos = this.state.todos;
    todos.push({ id: taskId, name: taskName, isCompleted: false });
    this.setState({
      todos
    });
  }
  handleKeyUpAdd(e) {
    if (e.keyCode === 13) {
      this.handleAdd();
    }
  }
  handleRename(taskId, name) {
    var todos = this.state.todos;
    for (var i in todos) {
      if (todos[i].id === taskId) {
        todos[i].name = name;
        break;
      }
    }
    this.setState({ todos });
  }

  render() {
    var statistics = {
      todoCount: this.state.todos.length || 0,
      todoCompleteCount: this.state.todos.filter(todo => {
        return todo.isCompleted;
      }).length
    };

    return (
      <div className="App">
        <header>
          <NavTitle />
        </header>
        <div>
          <ButtonAddTask />
        </div>

        <div className="Nav-subtitle-container">
          <div className="Nav-subtitle">
            {statistics.todoCount - statistics.todoCompleteCount}
            &nbsp;Tasks&nbsp;Remaining&nbsp;
            {/* /&nbsp;
            {statistics.todoCount}
            &nbsp;Inbox */}
          </div>
        </div>
        <header>
          <input
            type="text"
            ref="taskname"
            placeholder="Add New"
            className="Input-container"
            onKeyUp={this.handleKeyUpAdd.bind(this)}
          />
          &nbsp;&nbsp;
          {/* <button onClick={this.handleAdd.bind(this)}>Add Todo</button> */}
        </header>
        <TodoList
          todos={this.state.todos}
          removeTask={this.handleRemoveTask.bind(this)}
          toggleComplete={this.handleToggleComplete.bind(this)}
          rename={this.handleRename.bind(this)}
        />
      </div>
    );
  }
}

export default App;

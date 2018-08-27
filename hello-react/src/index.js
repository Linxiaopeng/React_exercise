import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./index.css";

class Title extends Component {
  handleClickOnTitle(word, e) {
    alert(this, word);
  }

  render() {
    return (
      <h1 onClick={this.handleClickOnTitle.bind(this, "Hello")}>React.js</h1>
    );
  }
}

class Header extends Component {
  render() {
    return (
      <div>
        <Title />
        <h2>This is Header</h2>
      </div>
    );
  }
}

class LikeButton extends Component {
  static defaultProps = {
    likedText: "Unlike",
    unlikedText: "Like"
  };

  constructor() {
    super();
    this.state = { isLiked: false };
  }

  handleClickOnLikeButton() {
    this.setState({
      isLiked: !this.state.isLiked
    });
  }

  render() {
    return (
      <button onClick={this.handleClickOnLikeButton.bind(this)}>
        {this.state.isLiked ? this.props.likedText : this.props.unlikedText}
        👍
      </button>
    );
  }
}

const users = [
  { username: " Jerry", age: 21, gender: " male" },
  { username: " Tom", age: 22, gender: " female" }
];

class User extends Component {
  render() {
    const { user } = this.props;
    return (
      <div>
        <div>
          Name:
          {user.username}
        </div>
        <div>
          Age:
          {user.age}
        </div>
        <div>
          Gender:
          {user.gender}
        </div>
        <hr />
      </div>
    );
  }
}

class List extends Component {
  render() {
    return (
      <div>
        {users.map((user, i) => (
          <User key={i} user={user} />
        ))}
      </div>
    );
  }
}

class Main extends Component {
  render() {
    return (
      <div>
        <h2>This is main content</h2>
        <LikeButton />
        <LikeButton likedText="Nooice" unlikedText="Noice" />
        <List />
      </div>
    );
  }
}

class Footer extends Component {
  render() {
    return (
      <div>
        <h2>This is footer</h2>
      </div>
    );
  }
}

class Index extends Component {
  render() {
    return (
      <div>
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}

ReactDOM.render(<Index />, document.getElementById("root"));

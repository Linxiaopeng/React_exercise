import React, { Component } from "react";

class CommentList extends Component {
  render() {
    const comments = [
      { username: "Jerry", content: "Hello" },
      { username: "Tom", content: "World" },
      { username: "Spike", content: "React" }
    ];

    return (
      <div>
        {comments.map((comment, i) => {
          return (
            <div key={i}>
              {comment.username}:{comment.content}
            </div>
          );
        })}
      </div>
    );
  }
}

export default CommentList;

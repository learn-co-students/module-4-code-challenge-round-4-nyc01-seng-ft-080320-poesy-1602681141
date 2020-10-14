import React from "react";

class Poem extends React.Component {
  render() {
    return (
      <div>
        <h3>{this.props.poemObj.title}</h3>
        <p>{this.props.poemObj.content}</p>
        <p>
          <strong>- {this.props.poemObj.author}</strong>
        </p>
        <button>Mark as read</button>
      </div>
    );
  }
}

export default Poem;

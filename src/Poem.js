import React from "react";

class Poem extends React.Component {
  render() {
    return (
      <div>
        <h3>{this.props.renderedPoem.title}</h3>
        <p>{this.props.renderedPoem.content}</p>
        <p>
          <strong>- By {this.props.renderedPoem.author}</strong>
        </p>
        <button>Mark as read</button>
      </div>
    );
  }
}

export default Poem;

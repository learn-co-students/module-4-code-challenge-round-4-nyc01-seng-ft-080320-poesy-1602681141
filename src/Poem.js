import React from "react";

class Poem extends React.Component {

  readHandler = (event) => {
    if(event.target.innerText === "Mark as Read") {
      event.target.innerText = "Mark as Unread"
    } else if(event.target.innerText === "Mark as Unread") {
      event.target.innerText = "Mark as Read"
    }
  }

  render() {
    return (
      <div>
        <h3>{this.props.poem.title}</h3>
        <p>{this.props.poem.content}</p>
        <p>
          <strong>- By {this.props.poem.author}</strong>
        </p>
        <button onClick={event => this.readHandler(event)}>Mark as Read</button>
        <button onClick={() => {this.props.deleteHandler(this.props.poem.id)}}>Delete This Book</button>
      </div>
    );
  }
}

export default Poem;

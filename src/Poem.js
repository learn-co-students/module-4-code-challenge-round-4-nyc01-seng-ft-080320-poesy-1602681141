import React from "react";

class Poem extends React.Component {
  render() {
    return (
      <div>
        <h3>{this.props.poem.title}</h3>
        <p>{this.props.poem.content}</p>
        <p>
            <strong>- {this.props.poem.author}</strong>
        </p>
        <button onClick={() => this.props.readHandler(this.props.poem)}>{this.props.read ? 'Mark as unread' : 'Mark as read'}</button>
        <button onClick={() => this.props.deleteHandler(this.props.poem.id)}>Delete</button>
      </div>
    );
  }
}

export default Poem;

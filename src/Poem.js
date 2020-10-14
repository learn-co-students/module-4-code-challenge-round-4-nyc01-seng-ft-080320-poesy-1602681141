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
        <button onClick={() => this.props.toggleRead(this.props.poem)}> Mark as {this.props.readPoems.includes(this.props.poem)? 'unread' : 'read'}</button>
        <button onClick={() => this.props.delete(this.props.poem)}>X</button>
        <br />
        <br />
        <button onClick={() => this.props.favorite(this.props.poem)}> ❤️ </button>
      </div>
    );
  }
}

export default Poem;

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
        {/* <button>X</button> */}
      </div>
    );
  }
}

export default Poem;

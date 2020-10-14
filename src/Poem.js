import React from "react";

class Poem extends React.Component {

  state = {
    read: false
  }

  toggleButton = () => {
    this.setState(prevState => {
      return {
        read: !prevState.read
      }
    })
  }

  render() {
    return (
      <div>
        <h3>{this.props.poem.title}</h3>
        <p>{this.props.poem.content}</p>
        <p>
        <strong>- By {this.props.poem.author}</strong>
        </p>
        {this.state.read ? <button onClick={this.toggleButton}>Mark as unread</button> : <button onClick={this.toggleButton}>Mark as read</button>}
      </div>
    );
  }
}

export default Poem;

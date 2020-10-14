import React from "react";

class Poem extends React.Component {
  state = {
    read: false
  }

  handleClick = () => {
    this.setState(prevState => ({
      read: !prevState.read
    }))
  }

  render() {
    return (
      <div>
        <h3>{this.props.poem.title}</h3>
        <p>{this.props.poem.content}</p>
        <p>
          <strong>- {this.props.poem.author}</strong>
        </p>
      <button onClick={this.handleClick}>{this.state.read ? 'Mark as unread' : 'Mark as read'}</button>
      </div>
    );
  }
}

export default Poem;

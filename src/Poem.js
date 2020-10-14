import React from "react";

class Poem extends React.Component {

  state={
    markAsRead: false
  }

  markAsRead = () => {
    this.setState({ markAsRead: !this.state.markAsRead })
  }

  render() {
    console.log(this.props)
    return (
      <div>
        <h3>{this.props.poem.title}</h3>
        <p>{this.props.poem.content}</p>
        <p>
          <strong>- By {this.props.poem.author}</strong>
        </p>
        <button onClick={this.markAsRead}>{this.state.markAsRead ? "Mark as Unread" : "Read"}</button>
      </div>
    );
  }
}

export default Poem;

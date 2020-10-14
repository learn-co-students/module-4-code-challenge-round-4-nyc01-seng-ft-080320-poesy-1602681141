import React from "react";

class Poem extends React.Component {

  //if we wanted read to persist I imagine the data would have a column for user id or
  // a read columns or something
  state = {
    read: false,
  }

  toggleRead = () => {
    this.setState(ps => ({
      read: !ps.read
    }))
  }

  render() {
    return (
      <div>
        <h3
          onClick = {() => this.props.favHandler(this.props.poem)}
        >{this.props.poem.title}</h3>
        <p>{this.props.poem.content}</p>
        <p>
          <strong>- By {this.props.poem.author}</strong>
        </p>
        <button
          onClick ={this.toggleRead}
        >{this.state.read ? 'Mark as unread' : 'Mark as read'} </button>
      </div>
    );
  }
}

export default Poem;

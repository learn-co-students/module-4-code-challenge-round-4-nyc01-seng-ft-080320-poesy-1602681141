import React from "react";

class Poem extends React.Component {
  state = {
    read: true
  }

  readClick = () => {
    this.setState({read: !this.state.read})
  }

  render() {
    let read = 'read'
    if(!this.state.read){read = 'unread'}

    return (
      <div>
        <h3>{this.props.poem.title}</h3>
        <p>{this.props.poem.content}</p>
        <p>
          <strong>- {this.props.poem.author}</strong>
        </p>
        <button onClick={this.readClick}>Mark as {read}</button>
      </div>
    );
  }
}

export default Poem;

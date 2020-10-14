import React from "react";

class Poem extends React.Component {

  state = {
    read: false
  }

  readIt = () => {
    if (this.state.read){
      return "unread"
    }else{
      return "read"
    }
  }

  readToggle = () => {
    this.setState({read: !this.state.read})
  }
  render() {
    return (
      <div>
        <h3>{this.props.poem.title}</h3>
        <p>{this.props.poem.content}</p>
        <p>
          <strong>- By {this.props.poem.author}</strong>
        </p>
        <button onClick={this.readToggle}>Mark as {this.readIt()}</button>
      </div>
    );
  }
}

export default Poem;

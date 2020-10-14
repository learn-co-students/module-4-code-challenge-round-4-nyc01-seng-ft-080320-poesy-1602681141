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
        <div className="buttons" style={{display: "flex", justifyContent: "space-between"}}>
          <button style={{width:"140px"}}onClick={this.readToggle}>Mark as {this.readIt()}</button>
          <button onClick={() => this.props.theyLikeMe(this.props.poem)}>💖</button>
          <button onClick={() => this.props.deletePoem(this.props.poem.id)}>Delete Me</button>
        </div>
      </div>
    );
  }
}

export default Poem;

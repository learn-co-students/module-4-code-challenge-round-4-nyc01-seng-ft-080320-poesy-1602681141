import React from "react";

class Poem extends React.Component {
  
  state = {
    buttonText : "Mark as read" 
  }
  
  clickHandler = () => {
    let buttonText = this.state.buttonText === "Mark as read" ? "Mark as unread" : "Mark as read"
    this.setState({buttonText : buttonText})
  }

  render() {
    return (
      <div>
        <h3>{this.props.poem.title}</h3>
        <p>{this.props.poem.content}</p>
        <p>
          <strong>- By {this.props.poem.author}</strong>
        </p>
        <button onClick={this.clickHandler}>{this.state.buttonText}</button>
      </div>
    );
  }
}

export default Poem;

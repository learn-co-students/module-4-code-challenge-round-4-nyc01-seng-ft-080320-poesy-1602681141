import React from "react";

class Poem extends React.Component {
  
  state = {
    clicked: false
  }

  clickHandler = () => {
    this.setState(prevState =>({
      clicked: !prevState.clicked
    }))
  }

  render() {
    return (
      <div>
        <h3>{this.props.poem.title}</h3>
        <p>{this.props.poem.content}</p>
        <p>
          <strong>- By {this.props.poem.author}</strong>
        </p>
        <button onClick={this.clickHandler}>{this.state.clicked ? "Mark as unread" : "Mark as read"}</button>
      </div>
    );
  }
}

export default Poem;

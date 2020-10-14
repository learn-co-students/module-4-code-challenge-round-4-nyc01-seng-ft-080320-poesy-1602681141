import React from "react";

class Poem extends React.Component {

state = {
  clicked: false
}

clickHandler = () => {
  this.setState(prevState => ({ clicked: !prevState.clicked}))
}

  render() {
    return (
      <div>
        <h3>{this.props.poem.title}</h3>
        <p>{this.props.poem.content}</p>
        <p>
    <strong>{`By ${this.props.poem.author}`}</strong>
        </p>
        <div className="read" onClick={this.clickHandler}>
          {this.state.clicked ? <button>Mark as unread</button> : <button> Mark as read </button> }

        </div>
      </div>
    );
  }
}

export default Poem;

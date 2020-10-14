import React from "react";

class Poem extends React.Component {
    state ={
        read: false
    }

    clickHandler = () => {
        this.setState(prevState => ({read: !prevState.read}))
    }

    localDeleteHandler = () => {
        this.props.deleteHandler(this.props.poem.id)
    }
  render() {
    return (
      <div>
        <h3>{this.props.poem.title}</h3>
        <p>{this.props.poem.content}</p>
        <p>
          <strong>- By {this.props.poem.author}</strong>
        </p>
        <button onClick={this.clickHandler}>{this.state.read? "Mark as unread" : "Mark as read"}</button>
        <button onClick={this.localDeleteHandler}>Delete Poem</button>
      </div>
    );
  }
}

export default Poem;

import React from "react";

class Poem extends React.Component {

  state = {
    read: false
  }

  readHandler = () => {
    this.setState({read: !this.state.read})
  }

  clickerHandler = () => {
    this.props.clickerHandler(this.props.poem)
  }

  deleteHandler = () => {
    this.props.deleteHandler(this.props.poem)
  }

  render() {
    return (
      <div>
        <h3>{this.props.poem.title}</h3>
        <p>{this.props.poem.content}</p>
        <p>
          <strong>- By {this.props.poem.author}</strong>
        </p>
    <button onClick={this.readHandler}> {(this.state.read) ? <>Mark as unread</> : <>Mark as read</>} </button>
    <button onClick={this.clickerHandler}> ❤️ </button>
    {(this.props.deleteHandler) ? <button onClick={this.deleteHandler}> Delete </button> : ""}
      </div>
    );
  }
}

export default Poem;

import React from "react";

class Poem extends React.Component {

  state = {
    read: true
  }


  toggleRead = () => {
    if (this.state.read === true){
      this.setState({read: false})
    } else {
      this.setState({read: true})
    }
  }

  deleteHandler = () => {
    this.props.deleteFromApi(this.props.poemObj)
  }


  render() {

    let readButton;
    if (this.state.read){
      readButton = <button onClick={this.toggleRead}>Mark as read</button> 
    } else {
      readButton = <button onClick={this.toggleRead}>Mark as unread</button> 
    }

    return (
      <div>
        <h3>{this.props.poemObj.title}</h3>
        <p>{this.props.poemObj.content}</p>
        <p>
          <strong>- {this.props.poemObj.author}</strong>
        </p>
        {readButton}
        <button onClick={this.deleteHandler}>Delete (not persisting yet)</button>
      </div>
    );
  }
}

export default Poem;

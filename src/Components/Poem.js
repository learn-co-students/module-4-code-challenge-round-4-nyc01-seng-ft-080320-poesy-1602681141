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

  deleteHandler = () => {
    this.props.delete(this.props.poem)
  }

  addToFavorite = () => {
    this.props.favorite(this.props.poem)
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
        <button onClick={this.deleteHandler} >Delete Poem</button>
        <button onClick={this.addToFavorite}>Add to Favorite</button>
      </div>
    );
  }
}

export default Poem;

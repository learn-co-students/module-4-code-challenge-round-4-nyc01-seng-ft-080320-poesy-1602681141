import React from "react";

class Poem extends React.Component {

  state = {
    read: false,
    favorite: false
  }

  toggleButton = () => {
    this.setState(prevState => {
      return {
        read: !prevState.read      
      }
    })
  }

  deletePoem = () => {
    this.props.handleDelete(this.props.poem)
  }

  addToFavorites = () => {
    this.props.favoriteHandler(this.props.poem)
    this.setState(prevState => {
      return {
        favorite: !prevState.favorite
      }
    })
  }

  render() {
    return (
      <div>
        <h3>{this.props.poem.title}</h3>
        <p>{this.props.poem.content}</p>
        <p>
        <strong>- By {this.props.poem.author}</strong>
        </p>
        {this.state.read ? <button onClick={this.toggleButton}>Mark as unread</button> : <button onClick={this.toggleButton}>Mark as read</button>}
        {this.state.favorite ? <button onClick={this.addToFavorites}>Remove from favorites</button> : <button onClick={this.addToFavorites}>Add to favorites</button>}
        {/* <button onClick={this.addToFavorites}>Add to favorites</button> */}
        <button onClick={this.deletePoem}>Delete</button>
      </div>
    );
  }
}

export default Poem;

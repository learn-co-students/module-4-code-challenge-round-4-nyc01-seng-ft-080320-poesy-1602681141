import React from "react";

class Poem extends React.Component {
  state = {
    read: false,
    favorite: false
  }

  handleClick = event => {
    event.persist();
    this.setState(prevState => ({
      [event.target.name]: !prevState[event.target.name]
    }))
    if (event.target.name === 'favorite') {
      this.props.toggleFavorite(this.props.poem)
    }
  }

  render() {
    return (
      <div>
        <h3>{this.props.poem.title}</h3>
        <p>{this.props.poem.content}</p>
        <p>
          <strong>- {this.props.poem.author}</strong>
        </p>
        {this.props.parentContainer === 'PoemsContainer' ? 
        <>
          <button name="read" onClick={this.handleClick}>{this.state.read ? 'Mark as unread' : 'Mark as read'}</button>
          <button name="favorite" onClick={this.handleClick}>{this.state.favorite ? 'Remove from favorites' : 'Add to favorites'}</button>
        </>
        :
        null}
      </div>
    );
  }
}

export default Poem;

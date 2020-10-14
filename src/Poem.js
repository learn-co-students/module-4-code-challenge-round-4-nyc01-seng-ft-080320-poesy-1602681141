import React from "react";

class Poem extends React.Component {

  state = {
    text: 'Mark as read'
  }

  clickHandler = () => {
    this.setState({ text: 'Mark as unread' })
  }

  render() {
    let id = this.props.poem.id
    return (
      <div 
      // addToFavorites={this.props.addToFavorites(id)}
      >
        <h3>{this.props.poem.title}</h3>
        <p>{this.props.poem.content}</p>
        <p>
          <strong>{this.props.poem.author}</strong>
        </p>
        <button onClick={this.clickHandler}>{this.state.text}</button>
      </div>
    );
  }
}

export default Poem;

import React from "react";

class Poem extends React.Component {
  state = {
    read: true,
    favorite: false
  }

  onClick = (e) => {
    this.setState({[e.target.name]: !this.state[e.target.name]})
    if(e.target.name === 'favorite'){this.props.addFavorite(this.props.poem, this.state.favorite)}
  }

  render() {
    let read = 'read'
    if(!this.state.read){read = 'unread'}

    let favorite = 'Add to'
    if(this.state.favorite){favorite = 'Remove from'}

    return (
      <div>
        <h3>{this.props.poem.title}</h3>
        <p>{this.props.poem.content}</p>
        <p>
          <strong>- {this.props.poem.author}</strong>
        </p>
        <button name="read" onClick={this.onClick}>Mark as {read}</button>
        <button name="favorite" onClick={this.onClick}>{favorite} Favorites</button>
      </div>
    );
  }
}

export default Poem;

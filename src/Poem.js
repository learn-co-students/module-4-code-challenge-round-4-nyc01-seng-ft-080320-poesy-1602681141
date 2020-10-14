import React from "react";

class Poem extends React.Component {

  state = {
    clicked: false,
    favorited: false
  }

  clicked = () => {
    this.setState((prevState => ({ clicked: !prevState.clicked })))
  }

  render() {
    return (
      <div>
        <h3>{this.props.poem.title}</h3>
        <p>{this.props.poem.content}</p>
        <p>
          <strong>- By {this.props.poem.author}</strong>
        </p>
        <button onClick={() => { this.clicked() }}>{this.state.clicked ? "Mark as Unread" : "Mark as Read"}</button>
        {this.state.favorited ? null : <button onClick={() => { this.setState((prevState) => ({ favorited: !prevState.favorited })); this.props.addToFavorites(this.props.poem) }}>Add to Favorites </button>}
        <button onClick={() => {this.props.deletePoem(this.props.poem)}}>Delete Poem</button>
      </div>
    );
  }
}

export default Poem;
import React from "react";

class FavoritePoem extends React.Component {
  render() {
    return (
      <div>
          <p> <i>{this.props.poem.title}</i> by <b>{this.props.poem.author}</b></p>
      </div>
    );
  }
}

export default FavoritePoem;
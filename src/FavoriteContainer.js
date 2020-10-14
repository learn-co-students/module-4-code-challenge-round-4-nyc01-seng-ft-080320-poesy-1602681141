import React from "react";

export default class FavoriteContainer extends React.Component {
  renderPoems = () => {
    return this.props.poemList.map(poem => {
      return(
        <div className="poems-container">
          <h3>{poem.title}</h3>
          <p>
            <strong>- {poem.author}</strong>
          </p><hr></hr>
        </div>
      )
    })
  }

  render() {
    return(this.renderPoems())
  }
}
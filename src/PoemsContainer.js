import React from "react";
import Poem from "./Poem";

class PoemsContainer extends React.Component {

    renderPoems = () => {
        return this.props.poems.map(poem => {
            return <Poem removeFavoriteHandler={this.props.removeFavoriteHandler} favoriteHandler={this.props.favoriteHandler}deleteHandler={this.props.deleteHandler}key={poem.id} poem={poem}/>
        })
    }
  render() {
    return (
      <div className="poems-container">
        {
          this.renderPoems()
        }
      </div>
    );
  }
}

export default PoemsContainer;

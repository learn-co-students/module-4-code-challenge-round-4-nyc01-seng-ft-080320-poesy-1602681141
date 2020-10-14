import React from "react";
import Poem from "./Poem";

class PoemsContainer extends React.Component {

  renderPoems = () => {
   return this.props.poems.map(p => 
   <Poem 
    poem = {p} 
    key = {p.id}
    favHandler = {this.props.favHandler}
    />)
  }

  render() {
    return (
      <div className="poems-container">
        <h3>Click on Poem Titles to Favorite/Unfavorite(sry bout css)</h3>
        {
          this.renderPoems()
        }
      </div>
    );
  }
}

export default PoemsContainer;

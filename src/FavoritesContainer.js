import React from "react";
import Poem from "./Poem";

class FavoritesContainer extends React.Component {

  renderFavorites = () => { 
    return this.props.poems.map(obj=> <Poem poem={obj} key={obj.id} clickerHandler={this.props.unlikeClicker}/>)
  }

  render() {
    return (
      <div className="favorites-container">
        {
         this.renderFavorites()
        }
      </div>
    );
  }
}

export default FavoritesContainer;

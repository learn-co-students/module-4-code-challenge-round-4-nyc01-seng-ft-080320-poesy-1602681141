import React from "react";
import FavoritePoem from "./FavoritePoem";

class FavoriteContainer extends React.Component {
  render() {
    return (
      <div className="poems-container"> 
       <h1> Favorited Poems</h1>
        {this.props.poems.map(el => {return <FavoritePoem key={el.id} poem={el}/>})}
      </div>
    );
  }
}

export default FavoriteContainer;
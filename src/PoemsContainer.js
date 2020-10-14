import React from "react";
import Poem from "./Poem";

const PoemsContainer = props => {
  const mapPoems = () => {
    return props.poems.map(poem => {
      return (
        <Poem 
          poem={poem}
          key={poem.id}
          favorites={props.favorites}
          toggleFavorite={props.toggleFavorite}
          parentContainer="PoemsContainer" // so it knows whether to show the buttons or not
          appHandleDelete={props.appHandleDelete}
        />
      );
    });
  }

  return (
    <div className="poems-container">
      <h2>All Poems</h2>
      {mapPoems()}
    </div>
  );
}

export default PoemsContainer;

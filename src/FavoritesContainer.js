import React from 'react';
import Poem from './Poem';

const FavoritesContainer = props => {
  const mapPoems = () => {
    return props.favorites.map(poem => { 
      return (
        <Poem 
          poem={poem} 
          key={poem.id} 
          parentContainer="FavoritesContainer" // so it knows whether to show the buttons or not
        />
      ); 
    });
  };

  return (
    <div className="poems-container">
      {/* if there are no favorites, don't bother to render the header.
      could have set this conditional for the whole return statement but that makes the code
      much messier. */}
      <h2>{props.favorites.length > 0 ? 'Favorites' : null}</h2>
      {mapPoems()}
    </div>
  );
};

export default FavoritesContainer;
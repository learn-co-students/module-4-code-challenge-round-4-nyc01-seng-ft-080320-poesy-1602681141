import React from 'react';
import Poem from './Poem';

class FavoritesContainer extends React.Component {
  mapPoems = () => {
    return this.props.favorites.map(poem => { return <Poem poem={poem} key={poem.id} parentContainer="FavoritesContainer" /> })
  }

  render() {
    return (
      <div className="poems-container">
        <h2>{this.props.favorites.length > 0 ? 'Favorites' : null}</h2>
        {
          this.mapPoems()
        }
      </div>
    );
  }
}

export default FavoritesContainer;
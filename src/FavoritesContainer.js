import PoemsContainer from './PoemsContainer';
import React from 'react'
class FavoritesContainer extends PoemsContainer {

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

export default FavoritesContainer
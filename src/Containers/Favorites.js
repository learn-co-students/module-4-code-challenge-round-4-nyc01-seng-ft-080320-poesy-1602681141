import React from 'react';
import Poem from '../Components/Poem';

const Favorites = props => {
    const renderFavorites = () => {
       return props.favorites.map(poem => <Poem key={poem.id} poem={poem} />)
    }
    return ( 
        <div>
            <h1>Favorite Poems</h1>
            {renderFavorites()}
        </div>
    )
}

export default Favorites;
import React from 'react';
import Poem from './Poem';

class FavoritesList extends React.Component {
    render() {
        return (
            <div className="favorite-poems-container">
                {
                    this.props.poems.map(el => <Poem key={el.id} poem={el} />)
                }
            </div>
        )
    }
}

export default FavoritesList
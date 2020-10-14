import React from 'react'


class FavoritesContainer extends React.Component {

    renderFavorites = () => {
        return this.props.favorites.map(poem => <h4 key={poem.id} poem={poem}>{poem.title} by {poem.author}</h4>)
    }

    render() {
        return (
            <div>
                {this.renderFavorites()}
            </div>
        )
    }
}

export default FavoritesContainer;
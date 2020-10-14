import React from 'react'
import FavPoem from './FavPoem'

class FavPoemsContainer extends React.Component {
    renderFavPoems = () => {
        return this.props.favPoems.map((poemObj, indx) => <FavPoem poem={poemObj} key={indx}/>)
    }

    render() {
        return <div className="favContainer">
            <h2>Favorites: </h2>
            <ul>
                {this.renderFavPoems()}
            </ul>
        </div>
    }
}

export default FavPoemsContainer
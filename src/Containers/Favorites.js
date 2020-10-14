import React from 'react'
import Poem from '../Components/Poem'

class Favorites extends React.Component {

    renderPoems = () => {
        return this.props.poems.map(poem => <Poem poem={poem} key={poem.id} favorite={true} unfavoritePoem={this.props.unfavoritePoem}/>)
    }

    render() {
        return (
            <div className="poems-container">
                <h2>Your Favorites:</h2>
                {this.renderPoems()}
            </div>
        )
    }

}

export default Favorites


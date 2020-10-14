import React from 'react'
import Poem from '../Components/Poem'

class PoemsContainer extends React.Component {

    renderPoems = () => {
        return this.props.poems.map(poem => <Poem poem={poem} key={poem.id} deletePoem={this.props.deletePoem} favoritePoem={this.props.favoritePoem} favorite={false}/>)
    }

    render() {
        return (
            <div className="poems-container">
                <h2>All Poems:</h2>
                {this.renderPoems()}
            </div>
        )
    }

}

export default PoemsContainer
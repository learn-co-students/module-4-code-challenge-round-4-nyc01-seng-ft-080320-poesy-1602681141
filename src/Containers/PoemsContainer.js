import React from 'react'
import Poem from '../Components/Poem'

class PoemsContainer extends React.Component {

    renderPoems = () => {
        return this.props.poems.map(poem => <Poem poem={poem} key={poem.id} deletePoem={this.props.deletePoem}/>)
    }

    render() {
        return (
            <div className="poems-container">
                {this.renderPoems()}
            </div>
        )
    }

}

export default PoemsContainer
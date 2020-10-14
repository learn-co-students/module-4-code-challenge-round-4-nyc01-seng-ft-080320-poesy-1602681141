import React from 'react'
import Poem from './Poem'

class FavPoem extends React.Component {
    state={
        clicked: false
    }

    clickHandler = () => {
        this.setState( prevState => {
            return { clicked: !prevState.clicked}
        })
    }
    render() {
        return <div>
            <li onClick={this.clickHandler}><h3>{this.props.poem.title}</h3></li>
            {this.state.clicked ? <Poem poem={this.props.poem} favorite /> : null}
        </div>
    }
}

export default FavPoem
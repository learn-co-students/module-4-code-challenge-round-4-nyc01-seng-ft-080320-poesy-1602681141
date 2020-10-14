import React from 'react'

class Favorite extends React.Component{

    state = {
        clicked: false
    }

    content = () => {
        return (
            <div>
            <div style={{padding: "20px"}}>
                {this.props.poem.content}
            </div>
                <button onClick={() => this.props.theyHateMe(this.props.poem)}>☠️</button>
            </div>
        )
    }
    reveal = () => {
        this.setState({clicked: !this.state.clicked})
    }
    render(){
        return(
        <li>
            <p onClick={this.reveal}>{this.props.poem.title} </p>
            {(this.state.clicked) ? this.content() : null
            }
        </li>
    )
}
}

export default Favorite
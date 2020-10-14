import React from 'react'

class Poem extends React.Component {

    state={
        read: false
    }

    readPoem = () => {
        this.setState(prevState => {
            return {
                read: !prevState.read
            }
        })
    }

    buttonText = () => {
        return this.state.read ? "Mark as Unread" : "Mark as Read"
    }

    render() {
        return (
            <div>
                <h4>{this.props.poem.title}</h4>
                {this.props.poem.content}
                <h4>By - {this.props.poem.author}</h4>
                <button onClick={this.readPoem}>{this.buttonText()}</button>
            </div>
        )
    }

}

export default Poem
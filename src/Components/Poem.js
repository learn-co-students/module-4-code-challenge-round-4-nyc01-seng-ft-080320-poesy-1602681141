import React from 'react'

class Poem extends React.Component {

    render() {
        return (
            <div>
                <h4>{this.props.poem.title}</h4>
                {this.props.poem.content}
                <h4>By - {this.props.poem.author}</h4>
                <button>Mark as Read</button>
            </div>
        )
    }

}

export default Poem
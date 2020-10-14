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

    deleteMe = () => {
        this.props.deletePoem(this.props.poem)
    }

    favoriteMe = () => {
        this.props.favoritePoem(this.props.poem)
    }

    unfavoriteMe = () => {
        this.props.unfavoritePoem(this.props.poem)
    }

    favoriteButton = () => {
        if (!this.props.favorite) {
            return <button onClick={this.favoriteMe}>Favorite</button>
        } else {
            return <button onClick={this.unfavoriteMe}>Unfavorite</button>
        }
    }

    deleteButton = () => {
        if (!this.props.favorite) {
            return <button onClick={this.deleteMe}>Delete</button>
        }
    }

    render() {
        return (
            <div>
                <h4>{this.props.poem.title}</h4>
                {this.props.poem.content}
                <h4>By - {this.props.poem.author}</h4>
                <button onClick={this.readPoem}>{this.buttonText()}</button>
                {this.deleteButton()}
                {this.favoriteButton()}
            </div>
        )
    }

}

export default Poem
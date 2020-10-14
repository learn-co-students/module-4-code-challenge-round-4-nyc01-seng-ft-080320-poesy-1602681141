import React from 'react'

class NewPoemForm extends React.Component {

    state={
        title: "",
        content: "",
        author: ""
    }

    changeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        return (
            <form className="new-poem-form">
                <input 
                    type="text"
                    name="title" 
                    placeholder="Poem Title..."
                    value={this.state.title} />
                <input
                    type="textarea"
                    name="content"
                    placeholder="Poem Content..."
                    value={this.state.content}
                    />
                <input 
                    type="text"
                    name="author" 
                    placeholder="Poem Author..."
                    value={this.state.author} 
                    />
                <input type="submit" value="Add Poem"/>
            </form>
        )
    }

}

export default NewPoemForm
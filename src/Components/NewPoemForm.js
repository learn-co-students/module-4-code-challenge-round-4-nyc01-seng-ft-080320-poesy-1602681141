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

    addPoem = (e) => {
        e.preventDefault()
        this.props.addPoem(this.state)
        this.setState({
            title: "",
            content: "",
            author: ""
        })
    }

    render() {
        return (
            <form className="new-poem-form">
                <input 
                    type="text"
                    name="title" 
                    placeholder="Poem Title..."
                    value={this.state.title} 
                    onChange={this.changeHandler}/>
                <input
                    type="textarea"
                    name="content"
                    placeholder="Poem Content..."
                    value={this.state.content}
                    onChange={this.changeHandler}
                    />
                <input 
                    type="text"
                    name="author" 
                    placeholder="Poem Author..."
                    value={this.state.author} 
                    onChange={this.changeHandler}
                    />
                <input 
                    type="submit" 
                    value="Add Poem"
                    onClick={this.addPoem}/>
            </form>
        )
    }

}

export default NewPoemForm
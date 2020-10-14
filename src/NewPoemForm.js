import React from "react";

class NewPoemForm extends React.Component {
    state = {
        title: '',
        author: '',
        content: ''
    }

    changeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    submitHandler = (e) => {
        e.preventDefault()
        this.props.addPoemHandler(this.state)
        this.setState( { title: '', author: '', content: '' } )
    }

    render() {
        return (
        <form className="new-poem-form" onSubmit={this.submitHandler}>
            <input placeholder="Title" 
                name="title" 
                value={this.state.title}
                onChange={this.changeHandler}/>
            <input placeholder="Author" 
                name="author" 
                value={this.state.author}
                onChange={this.changeHandler}/>
            <textarea placeholder="Write your masterpiece here..." 
                name="content" rows={10} 
                value={this.state.content}
                onChange={this.changeHandler}/>
            <input type="submit" 
                value="Share your masterpiece"/>
        </form>
        );
    }
}

export default NewPoemForm;

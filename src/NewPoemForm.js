import React from "react";

class NewPoemForm extends React.Component {

  state = {
    title: '',
    author: '',
    content: '',
  }

  formChangeHandler = e => [
    this.setState({ [e.target.name]: e.target.value })
  ]

  render() {
    return (
      <form 
        className="new-poem-form"
        onSubmit={e => {
          this.props.submitHandler(e)
          this.setState({
            title: '',
            author: '',
            content: '',
        })}}
      
      >
        <input 
          onChange={e => this.formChangeHandler(e)} 
          name='title' placeholder="Title" 
          value={this.state.title} 
        />
        <input 
          onChange={e => { this.formChangeHandler(e) }} 
          name='author' 
          placeholder="Author" 
          value={this.state.author} 
        />
        <textarea 
          onChange={e => this.formChangeHandler(e)} 
          name='content' 
          placeholder="Write your masterpiece here..." 
          value={this.state.content} rows={10} 
        />
        <input type="submit" value="Share your masterpiece" />
      </form>
    );
  }
}

export default NewPoemForm;

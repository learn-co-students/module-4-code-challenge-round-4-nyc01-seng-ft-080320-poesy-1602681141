import React from "react";

class NewPoemForm extends React.Component {
  
  state = {
    title : "",
    author : "",
    content : ""
  }
  
  changeHandler = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  submitHandler = (e) => {
    e.preventDefault()
    this.props.submitHandler(this.state)
  }

  
  render() {
    return (
      <form onSubmit={this.submitHandler} className="new-poem-form">
        <input name="title" value={this.state.title} onChange={this.changeHandler} placeholder="Title" />
        <input name="author" value={this.state.author} onChange={this.changeHandler} placeholder="Author" />
        <textarea name="content" value={this.state.content} onChange={this.changeHandler} placeholder="Write your masterpiece here..." rows={10} />
        <input type="submit" value="Share your masterpiece" />
      </form>
    );
  }
}

export default NewPoemForm;

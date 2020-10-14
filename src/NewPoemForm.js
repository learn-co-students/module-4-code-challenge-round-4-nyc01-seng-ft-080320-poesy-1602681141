import React from "react";

class NewPoemForm extends React.Component {
  state = {
    title: '',
    author: '',
    content: ''
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.appHandleSubmit(this.state)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="new-poem-form">
        <input name="title" placeholder="Title" onChange={this.handleChange} value={this.state.title} />
        <input name="author" placeholder="Author" onChange={this.handleChange} value={this.state.author} />
        <textarea name="content" placeholder="Write your masterpiece here..." onChange={this.handleChange} value={this.state.content} rows={10} />
        <input type="submit" value="Share your masterpiece" />
      </form>
    );
  }
}

export default NewPoemForm;

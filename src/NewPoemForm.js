import React from "react";

class NewPoemForm extends React.Component {
  state = {
    title: '',
    author: '',
    content: ''
  }

  onChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  onSubmit = (e) => {
    e.preventDefault()
    this.props.onSubmit(this.state)
    this.setState({
      title: '',
      author: '',
      content: ''
    })
  }

  render() {
    return (
      <form onSubmit={this.onSubmit} className="new-poem-form">
        <input name="title" placeholder="Title" value={this.state.title} onChange={this.onChange} />
        <input name="author" placeholder="Author" value={this.state.author} onChange={this.onChange} />
        <textarea name="content" placeholder="Write your masterpiece here..." value={this.state.content} onChange={this.onChange} rows={10} />
        <input type="submit" value="Share your masterpiece" />
      </form>
    );
  }
}

export default NewPoemForm;

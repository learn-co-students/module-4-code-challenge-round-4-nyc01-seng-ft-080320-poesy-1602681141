import React from "react";

class NewPoemForm extends React.Component {

  state = {
    title: "",
    author: "",
    content: ""
  }

  renderChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  submitForm = (e) => {
    e.preventDefault()
    this.props.handleSubmit(e.target)

    this.setState({
      title: "",
      author: "",
      content: ""
    })
  }

  render() {
    return (
      <form onSubmit={this.submitForm} className="new-poem-form">
        <input onChange={this.renderChange} placeholder="Title" name="title" value={this.state.title} />
        <input onChange={this.renderChange} placeholder="Author" name="author" value={this.state.author}/>
        <textarea onChange={this.renderChange} placeholder="Write your masterpiece here..." rows={10} name="content" value={this.state.content}/>
        <input type="submit" value="Share your masterpiece" />
      </form>
    );
  }
}

export default NewPoemForm;

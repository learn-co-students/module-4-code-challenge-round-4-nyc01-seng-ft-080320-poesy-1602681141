import React from "react";

class NewPoemForm extends React.Component {
  
  state = {
    title: "",
    author: "",
    content: ""
  }
  
  submitHandle = event => {
    event.preventDefault();
    this.props.post(this.state);
    this.setState({
      title: "",
      author: "",
      content: ""
    })
  }

  changeHandle = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  
  render() {
    return (
      <form onSubmit={this.submitHandle} className="new-poem-form">
        <input placeholder="Title" name="title" value={this.state.title} onChange={this.changeHandle} />
        <input placeholder="Author" name="author" value={this.state.author} onChange={this.changeHandle} />
        <textarea placeholder="Write your masterpiece here..." rows={10} name="content" value={this.state.content} onChange={this.changeHandle} />
        <input type="submit" value="Share your masterpiece" />
      </form>
    );
  }
}

export default NewPoemForm;

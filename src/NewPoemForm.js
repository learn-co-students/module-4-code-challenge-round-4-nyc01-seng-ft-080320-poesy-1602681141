import React from "react";

class NewPoemForm extends React.Component {

state = {
  title: "",
  content: "",
  author: "",
}

onChange = (e) => {
  if(e.target.name === "title") {
    this.setState({ title: e.target.value})
  }
  if(e.target.name === "author"){
    this.setState({ author: e.target.value})
  }
  if(e.target.name === "content"){
    this.setState({ content: e.target.value})
  }
}

submitHandler = (e) => {
  e.preventDefault()
  this.props.submitHandler(this.state)
}

  render() {
    return (
      <form className="new-poem-form" onSubmit={this.submitHandler}>
        <input name="title" onChange={this.onChange} placeholder="Title" />
        <input name="author" onChange={this.onChange} placeholder="Author" />
        <textarea name="content" onChange={this.onChange}  placeholder="Write your masterpiece here..." rows={10} />
        <input type="submit" value="Share your masterpiece" />
      </form>
    );
  }
}

export default NewPoemForm;

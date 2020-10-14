import React from "react";

class NewPoemForm extends React.Component {
  state = {
    title: "",
    auhtor: "",
    content: ""
  }
  changeHandler = (e) => {
    //console.log('changing')
    this.setState({ [e.target.name]: e.target.value })
  }
  submitHandler = (e) => {
    e.preventDefault()
    console.log('submitting')
    this.props.mySubmit(this.state)
  }
  render() {
    console.log(this.state)
    return (
      <form className="new-poem-form" onSubmit={this.submitHandler}>
        <input type="text" name="title" value={this.state.title} placeholder="Title" onChange={this.changeHandler} />
        <input type=" text" name="author" value={this.state.author} placeholder="Author" onChange={this.changeHandler} />
        <textarea type="text" name="content" value={this.state.content} placeholder="Write your masterpiece here..." rows={10} onChange={this.changeHandler} />
        <input type="submit" value="Share your masterpiece" />
      </form>
    );
  }
}

export default NewPoemForm;

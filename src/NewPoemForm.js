import React from "react";
 
class NewPoemForm extends React.Component {
  
  state = {
    title: "",
    content: "",
    author: ""
  }
  
  changeHandler = (e) => {
    console.log(e.target.value)
    this.setState({ [e.target.name]: e.target.value })
  }
  
  submitHandler = (e) => {
    e.preventDefault()
    this.props.submitHandler(this.state)
  }
  
  
  render() {
    return (
      <form className="new-poem-form" onSubmit={this.submitHandler}>
        <input placeholder="Title" type="text" name="title" value={this.state.title} onChange={this.changeHandler} />
        <input placeholder="Author" type="text" name="author" value={this.state.author} onChange={this.changeHandler}/>
        <textarea placeholder="Write your masterpiece here..." rows={10} type="text" name="content" value={this.state.content} onChange={this.changeHandler} />
        <input type="submit" value="Share your masterpiece" />
      </form>
    );
  }
}

export default NewPoemForm;

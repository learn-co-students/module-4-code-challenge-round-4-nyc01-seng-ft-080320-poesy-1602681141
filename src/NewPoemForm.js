import React from "react";

class NewPoemForm extends React.Component {

  state = {
    name: "t",
    author: "",
    content: ""
  }

  changeHandler = (e) => {
    if (e.target.name === "name"){
      this.setState({name: e.target.value})
    } else if (e.target.name === "author"){
      this.setState({author: e.target.value})
    } else
      this.setState({content: e.target.value})
  }

  submitHandler = (e) => {
    e.preventDefault()
    const name = e.target.name.value
    const author = e.target.author.value
    const content = e.target.content.value
    const newPoemObj = {
      name: name,
      author: author,
      content: content
    }
    console.log(newPoemObj)
  }


  render() {
    return (
      <form onSubmit={this.submitHandler} className="new-poem-form">
        <input name="name" placeholder="Title" value={this.state.name} onChange={this.changeHandler}/>
        <input name="author" placeholder="Author" value={this.state.author} onChange={this.changeHandler}/>
        <textarea name="content" placeholder="Write your masterpiece here..." rows={10} value={this.state.content} onChange={this.changeHandler}/>
        <input type="submit" value="Share your masterpiece" />
      </form>
    );
  }
}

export default NewPoemForm;

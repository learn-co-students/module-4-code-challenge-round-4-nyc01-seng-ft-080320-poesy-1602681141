import React from "react";

class NewPoemForm extends React.Component {

  state={
    title: "",
    author: "",
    content: ""
  }

  submitHandler = (e) => {
    e.preventDefault()
    this.props.submitHandler(this.state)
  }

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  render() {
    // console.log(this.state)
    return (
      <form className="new-poem-form" onSubmit={this.submitHandler}>
        <input placeholder="Title" />
        <input placeholder="Author" />
        <textarea placeholder="Write your masterpiece here..." rows={10} />
        <input type="submit" value="Share your masterpiece" />
      </form>
    );
  }
}

export default NewPoemForm;

import React from "react";

class NewPoemForm extends React.Component {

  submitHanlder = (e) => {
    e.preventDefault()
    this.props.submitHandler(e)
  }

  render() {
    return (
      <form className="new-poem-form" onSubmit={this.submitHanlder}>
        <input type="text" name="title" placeholder="Title" value={this.props.title} onChange={this.props.changeHandler}/>
        <input type="text" name="author" placeholder="Author" value={this.props.author} onChange={this.props.changeHandler}/>
        <textarea type="text" name="content" placeholder="Write your masterpiece here..." rows={10} value={this.props.content} onChange={this.props.changeHandler}/>
        <input type="submit" value="Share your masterpiece" />
      </form>
    );
  }
}

export default NewPoemForm;

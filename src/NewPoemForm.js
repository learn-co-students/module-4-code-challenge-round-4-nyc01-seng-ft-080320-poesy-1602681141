import React from "react";

class NewPoemForm extends React.Component {
  // state = {
  //   hidden: true 
  // }

  // toggleHidden() {
  //   this.setState({
  //     hidden: !this.state.hidden
  //   })
  // }

  submitHandler = event => {
    event.preventDefault()
    console.log(event)
  }

  render() {
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

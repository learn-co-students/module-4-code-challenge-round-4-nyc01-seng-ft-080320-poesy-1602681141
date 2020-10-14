import React from "react";
// This does not need to be a controller form since it is on submit
class NewPoemForm extends React.Component {
  render() {
    return (
      <form className="new-poem-form" onSubmit={(e) => this.props.newPoemHandler(e)}>
        <input placeholder="Title" name="title" />
        <input placeholder="Author" name="author" />
        <textarea placeholder="Write your masterpiece here..." rows={10} name="content"/>
        <input type="submit" value="Share your masterpiece" />
      </form>
    );
  }
}

export default NewPoemForm;

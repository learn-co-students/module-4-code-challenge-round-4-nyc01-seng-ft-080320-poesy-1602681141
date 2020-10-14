import React from "react";

class NewPoemForm extends React.Component {

  state = {
    newTitle: '',
    newAuthor: '',
    newContent: ''
  }

  changeTitle = (e) => {
    this.setState({ newTitle: e.target.value })
  }

  changeAuthor = (e) => {
    this.setState({ newAuthor: e.target.value })
  }
  
  changeContent = (e) => {
    this.setState({ newContent: e.target.value })
  }

  submitPoem = () => {
    this.props.addPoem(this.state.newTitle, this.state.newAuthor, this.state.newContent)
    this.setState({ newTitle: '', newAuthor: '', newContent: ''})
  }


  render() {
    return (
      <form className="new-poem-form" onSubmit={(e) => { e.preventDefault(); this.submitPoem(); }}>
        <input placeholder="Title" value={this.state.newTitle} onChange={this.changeTitle}/>
        <input placeholder="Author" value={this.state.newAuthor} onChange={this.changeAuthor}/>
        <textarea placeholder="Write your masterpiece here..." rows={10} value={this.state.newContent} onChange={this.changeContent}/>
        <input type="submit" value="Share your masterpiece" />
      </form>
    );
  }
}

export default NewPoemForm;

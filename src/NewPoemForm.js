import React from "react";

class NewPoemForm extends React.Component {
  state = {
    title: "",
    author: "",
    content: "",
  }


  handleSubmit = event => {
    event.preventDefault();
    if(this.state.title!=="" && this.state.author!=="" && this.state.content!==""){
      this.props.createPoem(this.state);
      this.resetForm();
    }else
      window.alert("Fill out your form before submitting");
  }

  resetForm = () => {
    this.setState({
      title: "",
      author: "",
      content: "",
    })
  }

  handleInputChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }
  
  render() {
    return (
      <form className="new-poem-form" onSubmit={this.handleSubmit}>
        <input placeholder="Title" name="title" value={this.state.title} onChange={this.handleInputChange}/>
        <input placeholder="Author" name="author" value={this.state.author} onChange={this.handleInputChange} />
        <textarea placeholder="Write your masterpiece here..." name="content" rows={10} value={this.state.content} onChange={this.handleInputChange}/>
        <input type="submit" value="Share your masterpiece" />
      </form>
    );
  }
}

export default NewPoemForm;

import React from "react";

class NewPoemForm extends React.Component {

  constructor(props) {
    super(props)
  
    this.state = {
       title:'',
       author:'',
       content:'',
    }
  }

  handleFormChange = (event) => {
    
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleFormSubmit = (event) => {
    event.preventDefault()
    this.props.createPoem(this.state)
  }
  
  
  
  render() {
    const {title, author, content,} =  this.state
    
    return (
      <form className="new-poem-form">
        <input placeholder="Title"  onChange={this.handleFormChange} name='title' value={title}/>
        <input placeholder="Author" onChange={this.handleFormChange} name='author' value={author}/>
        <textarea placeholder="Write your masterpiece here..." rows={10} onChange={this.handleFormChange} name='content' value={content}/>
        <input type="submit" value="Share your masterpiece" onClick={this.handleFormSubmit}/>
      </form>
    );
  }
}

export default NewPoemForm;

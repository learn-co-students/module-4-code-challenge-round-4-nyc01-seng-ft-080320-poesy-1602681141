import React from "react";


class NewPoemForm extends React.Component {

  state = {
    title: "",
    content: "",
    author: ""
  }

    submitformHandler = (e) => {
      fetch("http://localhost:8000/api/tasks/",
      {
          method: "POST",
          cache: "no-cache",
          headers:{
              "content_type": "application/json"
          },
          body: JSON.stringify(this.state)
      })
      .then(response=> response.json())

}
  
    
  
    changeHandler = (e) => {
    this.setState({[e.target.name]: e.target.value})
    }


  render() {
    return (
      <form className="new-poem-form" onSubmit={this.submitformHandler}>
        <input placeholder="Title" name="title" type="text" value={this.state.value} onChange={this.changeHandler}/>
        <input placeholder="Author" name="author" type="text" value={this.state.value} onChange={this.changeHandler}/>
        <textarea  rows={10} placeholder="Write your masterpiece here..." name="content" type="text" value={this.state.value} onChange={this.changeHandler}/>
        <input type="submit" value="Share your masterpiece" />
      </form>
    );
  }
}

export default NewPoemForm
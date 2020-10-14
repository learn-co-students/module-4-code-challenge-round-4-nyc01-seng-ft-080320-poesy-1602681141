import React from "react";

class NewPoemForm extends React.Component {

  state={
    title:"",
    author:"",
    content:""
  }

  upDateState =(e)=>{
    this.setState({[e.target.name]:[e.target.value]})
    
  }

  wrangleData=(e)=>{
    e.preventDefault();
    this.props.postIt(this.state)
    this.setState({title:'',author:'', content:''})
  }


  render() {
    return (
      <form className="new-poem-form" onSubmit={this.wrangleData}>
        <input placeholder="Title" name="title" value={this.state.title} onChange={this.upDateState}/>
        <input placeholder="Author" name="author" value={this.state.author} onChange={this.upDateState}/>
        <textarea placeholder="Write your masterpiece here..." rows={10} name="content" value={this.state.content} onChange={this.upDateState}/>
        <input type="submit" value="Share your masterpiece" />
      </form>
    );
  }
}

export default NewPoemForm;

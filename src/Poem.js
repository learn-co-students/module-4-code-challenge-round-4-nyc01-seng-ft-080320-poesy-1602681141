import React from "react";
 
class Poem extends React.Component {
  
  state= {
    read: false
  }
  

  readHandler = (e) => {
    console.log(e.target)
    this.setState((prevState) => ({ read: !prevState.read }))
  }
  
  render() {
    return (
      <div>
        <h3>{this.props.poem.title}</h3>
        <p>{this.props.poem.content}</p>
        <p>
          <strong>- {this.props.poem.author}</strong>
        </p>
        <span onClick={this.readHandler} >
        {this.state.read ? <button>Already Read</button> : <button>Mark as read</button>} 
        </span>
      </div>
    );
  }
}

export default Poem;

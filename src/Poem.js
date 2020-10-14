import React from "react";

class Poem extends React.Component {

  buttonReading=()=>{
    if(this.props.read===false){
      return "Mark as Read"
    } else {
      return "Mark Unread"
    }
  }
  
  getInfo=()=>{
    this.props.clickHandler(this.props.id)

  }


  render() {
 const {author, content, id, read, title} = this.props
let buttonReading = this.buttonReading()


    return (
      <div>
        <h3>{title}</h3>
        <p>{content}</p>
        <p>
          <strong>By: {author}</strong>
        </p>
        {/* {read? <button>Mark Unread</button>:  <button>Mark as Read</button> } */}
        <button onClick={this.getInfo}>{buttonReading}</button> 
      </div>
    );
  }
}

export default Poem;

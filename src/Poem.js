import React from "react";

class Poem extends React.Component {

  buttonReading=()=>{
    if(this.props.read===false){
      return "Mark as Read"
    } else {
      return "Mark As Unread"
    }
  }
  
  getInfo=(e)=>{
    this.props.clickHandler(this.props.id, e.target.name)

  }

  favoriteReading = () =>{
    if(this.props.favorite===false){
      return "Favorite It!"
    } else {
      return "On Your List!"
    }
  }


  render() {
 const {author, content, id, read, title} = this.props
let readReading = this.buttonReading()
let favoriteReading = this.favoriteReading()

    return (
      <div>
        <h3>{title}</h3>
        <p>{content}</p>
        <p>
          <strong>By: {author}</strong>
        </p>
        {/* {read? <button>Mark Unread</button>:  <button>Mark as Read</button> } */}
        <button name="read_button" onClick={this.getInfo}>{readReading}</button> 
        <button name="favorite_button" onClick={this.getInfo}>{favoriteReading}</button>
      </div>
    );
  }
}

export default Poem;

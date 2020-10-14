import React from "react";

class Poem extends React.Component {
  constructor(props) {
    super(props)
  
    this.state = {
       read: false
    }
  }

  handleReadClick = (event) => {
    console.log("handle read")
    this.setState({
      read: !this.state.read
    })
  }
  
  

  render() {
    const {title, content, author} = this.props.poem
    console.log(this.state)
    return (
      <div>
        <h3>{title}</h3>
        <p>{content}</p>
        <p>
          <strong>{author}</strong>
        </p>
        <button onClick={this.handleReadClick}>
          {this.state.read? "Mark as unread" : "Mark as read"}
        </button>
      </div>
    );
  }
}

export default Poem;

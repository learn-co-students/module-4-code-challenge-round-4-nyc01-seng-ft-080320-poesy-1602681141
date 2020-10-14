import React from "react";

class Poem extends React.Component {
  constructor(props) {
    super(props)
  
    this.state = {
       read: false
    }
  }

  handleReadClick = (event) => {
    this.setState({
      read: !this.state.read
    })
  }

  handleDeleteClick = (event) => {
    this.props.deletePoem(event.target.dataset.id)
  }
  
  

  render() {
    const {id, title, content, author} = this.props.poem
    
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
        <p>
          <button onClick={this.handleDeleteClick} data-id={id}> Delete </button>
        </p>
      </div>
    );
  }
}

export default Poem;

import React from "react";

class Poem extends React.Component {
  render() {
    // console.log(this)
    clickHandler = () => {

    }

    return (
      <div>
        <h3>{this.props.poem.title}</h3>
        <p>{this.props.poem.content}</p>
        <p>
          <strong>- By {this.props.poem.author}</strong>
        </p>
        <button onClick={this.clickHandler}>Mark as read</button>
      </div>
    );
  }
}

export default Poem;

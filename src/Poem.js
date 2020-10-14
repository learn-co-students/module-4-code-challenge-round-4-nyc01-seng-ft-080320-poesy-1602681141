import React from "react";

class Poem extends React.Component {
 

  state={
    title: "Mark as read"
  }

   changeTitle = () => {
      this.setState({ title: "mark as unread" });
   };

  render() {
    const {
      props,
    } = this;

    return (
      <div>
        <h3>{props.poem.title}</h3>
        <p>{props.poem.content}</p>
        <p>
          <strong>- By {props.poem.author}</strong>
        </p>
        <button onClick={this.changeTitle}>{this.state.title}</button>
      </div>
    );
  }
}

export default Poem;

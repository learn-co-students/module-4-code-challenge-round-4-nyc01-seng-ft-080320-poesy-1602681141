import React from "react";

class Poem extends React.Component {
  state = {
    clicked: true
  }
  clickHandler = () => {
    console.log('clicking')
  }
  render() {
    return (
      <div>
        <h3>{this.props.poem.title}</h3>
        <p>{this.props.poem.content}</p>
        <p>
          <strong>- By{this.props.poem.author}</strong>
        </p>
        <button onClick={this.clickHandler}  >Mark as read </button >
      </div>
    );
  }
}
// do prevstate
// add a callback functin clickhandler to button
// defin
export default Poem;

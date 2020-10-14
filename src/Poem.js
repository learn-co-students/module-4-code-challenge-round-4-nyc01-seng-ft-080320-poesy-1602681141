import React from "react";

class Poem extends React.Component {
  state = {
    clicked: true,
  }
  clickHandler = () => {
    console.log('clicking')
    this.setState((prevState) => ({ clicked: !prevState.clicked }))
  }
  changeButton = () => {
    return this.state.clicked ? "Mark as read" : "Mark as unread"
  }
  render() {
    return (
      <div>
        <h3>{this.props.poem.title}</h3>
        <p>{this.props.poem.content}</p>
        <p>
          <strong>- By{this.props.poem.author}</strong>
        </p>
        <button onClick={this.clickHandler}>{this.changeButton()} </button >

      </div>
    );
  }
}
// do prevstate
// add a callback functin clickhandler to button
// defin
export default Poem;

import React from "react";

class Poem extends React.Component {
  state={
    read: false,
  }

  toggleReadStatus = () => {
    let status = this.state.read;
    this.setState({
      read: !status,
    })
  }

  render() {
    return (
      <div>
        <h3>{this.props.renderedPoem.title}</h3>
        <p>{this.props.renderedPoem.content}</p>
        <p>
          <strong>- By {this.props.renderedPoem.author}</strong>
        </p>
        <button onClick={this.toggleReadStatus}>{this.state.read?"Mark as unread":"Mark as read"}</button>
      </div>
    );
  }
}

export default Poem;

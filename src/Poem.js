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

  alterFavorite = () => {
    this.props.alterFavorite(this.props.renderedPoem.id);
  }

  deletePoem = () => {
    this.props.deletePoem(this.props.renderedPoem.id);
  }

  render() {
    console.log(this.props);
    return (
      <div>
        <h3>{this.props.renderedPoem.title}</h3>
        <p>{this.props.renderedPoem.content}</p>
        <p>
          <strong>- By {this.props.renderedPoem.author}</strong>
        </p>
        {!this.props.renderedPoem.favorite?<button onClick={this.toggleReadStatus}>{this.state.read?"Mark as unread":"Mark as read"}</button>:""}
        &nbsp;
        {!this.props.renderedPoem.favorite?<button onClick={this.deletePoem}>{"Delete"}</button>:""}
        &nbsp;
        <button onClick={this.alterFavorite}>{!this.props.renderedPoem.favorite?"Favorite":"Remove Favorite"}</button>
      </div>
    );
  }
}

export default Poem;

import React from 'react';

class Poem extends React.Component {
	state = {
		read: false
	};

	clickHandler = () => {
		this.setState((prevState) => ({ read: !prevState.read }));
	};

	localDeleteHandler = () => {
		this.props.deleteHandler(this.props.poem.id);
	};
	localFavHandler = () => {
		this.props.favoriteHandler(this.props.poem);
	};
	renderButtons = () => {
		if (this.props.favorite) {
			return null;
		} else {
			return (
				<div>
					<button onClick={this.clickHandler}>{this.state.read ? 'Mark as unread' : 'Mark as read'}</button>
					<button onClick={this.localDeleteHandler}>Delete Poem</button>
					<button onClick={this.localFavHandler}>Add To Favorites</button>
				</div>
			);
		}
	};
	render() {
		return (
			<div>
				<h3>{this.props.poem.title}</h3>
				<p>{this.props.poem.content}</p>
				<p>
					<strong>- By {this.props.poem.author}</strong>
				</p>
				{this.renderButtons()}
				{/* <button onClick={this.clickHandler}>{this.state.read? "Mark as unread" : "Mark as read"}</button>
        <button onClick={this.localDeleteHandler}>Delete Poem</button>
        <button onClick={this.localFavHandler}>Add To Favorites</button> */}
			</div>
		);
	}
}

export default Poem;

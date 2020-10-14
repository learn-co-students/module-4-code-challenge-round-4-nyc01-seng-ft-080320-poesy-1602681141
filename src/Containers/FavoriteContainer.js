import React from "react";
import FavPoem from "../Components/favPoem";

class FavoriteContainer extends React.Component {

  renderPoems = () => {
    return this.props.favPoems.map(el => <FavPoem key={el.id} poem={el} favPoems={this.props.favPoems} handleDelete={this.props.handleDelete}/> )
  }

  render() {
    return (
      <div className="Favorites">
        <h2>Favorites</h2>
        {
         this.renderPoems()
        }
      </div>
    );
  }
}

export default FavoriteContainer;

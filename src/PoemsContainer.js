import React from "react";
import Poem from "./Poem";

class PoemsContainer extends React.Component {
  render() {
    return (
        <div className="poems-container">
          {
            this.props.poems.map(el => <Poem key={el.id} poem={el} addToFavorites={this.props.addToFavorites} /> )
          }
        </div>
    );
  }
}

export default PoemsContainer;

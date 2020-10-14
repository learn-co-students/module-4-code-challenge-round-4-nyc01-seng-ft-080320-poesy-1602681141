import React from "react";
import Poem from "./Poem";

class PoemsContainer extends React.Component {
  renderPoems = () => {
    return this.props.poemList.map(poem => <Poem poem={poem} addFavorite={this.props.addFavorite}/>)
  }

  render() {
    return (
      <div className="poems-container">
        {this.renderPoems()}
      </div>
    );
  }
}

export default PoemsContainer;

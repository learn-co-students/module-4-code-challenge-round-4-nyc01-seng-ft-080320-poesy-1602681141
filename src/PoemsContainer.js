import React from "react";
import Poem from "./Poem";

class PoemsContainer extends React.Component {
  mapPoems = () => {
    return this.props.poems.map(poem => { 
      return <Poem poem={poem} key={poem.id} toggleFavorite={this.props.toggleFavorite} parentContainer="PoemsContainer" appHandleDelete={this.props.appHandleDelete} /> 
    })
  }

  render() {
    return (
      <div className="poems-container">
        <h2>All Poems</h2>
        {
          this.mapPoems()
        }
      </div>
    );
  }
}

export default PoemsContainer;

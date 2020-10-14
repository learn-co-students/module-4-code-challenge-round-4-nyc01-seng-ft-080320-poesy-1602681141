import React from "react";
import Poem from "./Poem";

class PoemsContainer extends React.Component {

  mapPoems = () => {
    return this.props.poems.map(poem => { return <Poem poem={poem} key={poem.id} /> })
  }

  render() {
    return (
      <div className="poems-container">
        {
          this.mapPoems()
        }
      </div>
    );
  }
}

export default PoemsContainer;

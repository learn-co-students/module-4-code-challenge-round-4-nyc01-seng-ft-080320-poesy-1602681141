import React from "react";
import Poem from "./Poem";

class PoemsContainer extends React.Component {

  renderPoems = () => {
   return this.props.poems.map(p => 
   <Poem 
    poem = {p} 
    key = {p.id}
    />)
  }

  render() {
    return (
      <div className="poems-container">
        {
          this.renderPoems()
        }
      </div>
    );
  }
}

export default PoemsContainer;

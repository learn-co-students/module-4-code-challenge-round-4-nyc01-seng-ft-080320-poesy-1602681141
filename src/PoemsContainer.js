import React from "react";
import Poem from "./Poem";

class PoemsContainer extends React.Component {
  renderPoem = () => {
    return this.props.poems.map(poem => <Poem poem={poem} />)
  }
  render() {
    return (
      <div className="poems-container">
        {
         this.renderPoem()
        }
      </div>
    );
  }
}

export default PoemsContainer;

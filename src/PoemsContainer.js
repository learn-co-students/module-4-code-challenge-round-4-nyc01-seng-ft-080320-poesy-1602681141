import React from "react";
import Poem from "./Poem";

class PoemsContainer extends React.Component {

  renderPoems = () => {
    return this.props.poems.map(element => <Poem key={element.id} poem={element} />)
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

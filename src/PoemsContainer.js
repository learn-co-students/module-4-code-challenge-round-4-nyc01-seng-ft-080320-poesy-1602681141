import React from "react";
import Poem from "./Poem";

class PoemsContainer extends React.Component {
  renderPoems = () => {
    return this.props.poems.map(obj => <Poem key={obj.id} poem={obj} />)
  }
  render() {
    return (
      <div className="poems-container">
        {
          // render poems here
          this.renderPoems()
        }
      </div>
    );
  }
}

export default PoemsContainer;

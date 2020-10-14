import React from "react";
import Poem from "./Poem";

class PoemsContainer extends React.Component {

  renderPoems = () => {
    return this.props.poems.map(el => <Poem key={el.id} poem={el} handleDelete={this.props.handleDelete}/> )
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

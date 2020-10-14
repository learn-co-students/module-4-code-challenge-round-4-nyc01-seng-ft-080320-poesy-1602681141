import React from "react";
import Poem from "./Poem";

class PoemsContainer extends React.Component {
  
  renderPoems = toRenderPoems => {
    return toRenderPoems.map(toRenderPoem => <Poem key={toRenderPoem.id} renderedPoem={toRenderPoem} deletePoem={this.props.deletePoem} alterFavorite={this.props.alterFavorite}/>)
  }
  
  render() {
    return (
      <div className="poems-container">
        {
          // render poems here
          this.renderPoems(this.props.toRenderPoems)
        }
      </div>
    );
  }
}

export default PoemsContainer;

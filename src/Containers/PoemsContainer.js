import React from "react";
import Poem from "../Components/Poem";

class PoemsContainer extends React.Component {
  
  renderPoems = () => {
   return this.props.poems.map(poem => <Poem key={poem.id} delete={this.props.delete} poem={poem} favorite={this.props.favorite}  />)
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

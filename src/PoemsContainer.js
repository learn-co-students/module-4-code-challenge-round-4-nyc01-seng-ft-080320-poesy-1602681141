import React from "react";
import Poem from "./Poem"


class PoemsContainer extends React.Component {
  
  renderPoems = () => {
   return  this.props.poems.map(el => <Poem key={el.id} poem={el}/>)
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

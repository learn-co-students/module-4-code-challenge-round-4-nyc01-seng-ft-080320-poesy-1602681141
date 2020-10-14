import React from "react";
import Poem from "./Poem";

class PoemsContainer extends React.Component {

  renderPoems=()=>{
    return this.props.poems.map((poem, index)=><Poem key={index} {...poem} clickHandler={this.props.clickHandler}/>)

  }

  render() {
    console.log(this.props.poems)

    return (
      <div className="poems-container">
        {this.props.poems.length >0? 
          this.renderPoems():
          <h2>Loading Poems</h2>
        }
      </div>
    );
  }
}

export default PoemsContainer;

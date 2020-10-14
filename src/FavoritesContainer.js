import React from "react";
import Poem from "./Poem";

class FavoritesContainer extends React.Component {

  renderPoems=()=>{
    return this.props.poems.map((poem, index)=><Poem key={index} {...poem} clickHandler={this.props.clickHandler}/>)
  }

  render() {
    console.log(this.props.poems)

    return (
      <div className="poems-container">
        {
          this.renderPoems()
          
        }
      </div>
    );
  }
}

export default FavoritesContainer;
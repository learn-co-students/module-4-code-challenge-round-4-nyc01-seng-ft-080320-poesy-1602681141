import React from "react";
import Poem from "./Poem";

class PoemsContainer extends React.Component {
  render() {
    return (
      <div className="poems-container">
        {
        this.props.poems.map(el => {return <Poem key={el.id} poem={el} readPoems={this.props.readPoems} toggleRead={this.props.toggleReadPoem} delete={this.props.delete} favorite={this.props.favorite}/>})
        }
      </div>
    );
  }
}

export default PoemsContainer;

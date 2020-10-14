import React from "react";
import Poem from "./Poem";

class PoemsContainer extends React.Component {

  renderPoems = () => {
    return this.props.poems.map(obj=> <Poem poem={obj} key={obj.id} clickerHandler={this.props.likeClicker} deleteHandler={this.props.deleteHandler}/>)
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

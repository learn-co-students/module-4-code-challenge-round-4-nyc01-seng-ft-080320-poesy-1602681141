import React from "react";
import Poem from "../Components/Poem";

class PoemsContainer extends React.Component {

  renderPoems = () => {
    return this.props.poems.map(el => <Poem key={el.id} poem={el} favoriteHandler={this.props.favoriteHandler} handleDelete={this.props.handleDelete}/> )
  }

  render() {
    return (
      <div className="poems-container">
        <h2>Poems</h2>
        {
         this.renderPoems()
        }
      </div>
    );
  }
}

export default PoemsContainer;

import React from "react";
import Poem from "./Poem";

class PoemsContainer extends React.Component {

  state = {
    poemsApi: []
  }



  createPoemCards = () => {
    return this.props.poemsApi.map(poemObj => <Poem key={poemObj.id} poemObj={poemObj} />)
  }


  render() {
    return (
      <div className="poems-container">
        {
          this.createPoemCards()
        }
      </div>
    );
  }
}

export default PoemsContainer;

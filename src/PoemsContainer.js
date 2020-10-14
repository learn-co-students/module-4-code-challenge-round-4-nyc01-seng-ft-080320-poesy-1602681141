import React from "react";
import Poem from "./Poem";

class PoemsContainer extends React.Component {

  state = {
    poemsApi: []
  }

  componentDidMount = () => {
    fetch("http://localhost:6001/poems")
    .then(response => response.json())
    .then(poems => this.setState({ poemsApi: poems }))
  }

  createPoemCards = () => {
    return this.state.poemsApi.map(poemObj => <Poem key={poemObj.id} poemObj={poemObj} />)
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

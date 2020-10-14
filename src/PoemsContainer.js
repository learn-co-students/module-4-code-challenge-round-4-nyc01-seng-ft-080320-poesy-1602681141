import React from "react";
import Poem from "./Poem";

const API = " http://localhost:6001/poems/"

class PoemsContainer extends React.Component {
  
  state = {
    poems: []
  }

  componentDidMount() {
    fetch(API)
    .then(res => res.json())
    .then(data => {
      this.setState({
        poems: data
      })
  })
}
  
  renderPoems = () => {
    return this.state.poems.map((poemObj) => <Poem key={poemObj.id} poem={poemObj}/>
      
    )
  }
  

  render() {
    // console.log(this.state.poems)
    return (
      <div className="poems-container">
      {this.renderPoems()}
      </div>
    );
  }
}

export default PoemsContainer;

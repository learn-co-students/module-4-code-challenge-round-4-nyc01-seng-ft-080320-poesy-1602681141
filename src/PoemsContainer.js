import React from "react";
import Poem from "./Poem";

class PoemsContainer extends React.Component {
  state = {
    poemList: []
  }

  renderPoems = () => {
    return this.state.poemList.map(poem => <Poem poem={poem}/>)
  }

  componentDidMount() {
    fetch('http://localhost:6001/poems')
    .then(resp => resp.json())
    .then(data => this.setState({poemList: data}))
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

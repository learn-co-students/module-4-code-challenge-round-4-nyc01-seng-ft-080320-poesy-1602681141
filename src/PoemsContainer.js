import React from "react";
import Poem from "./Poem";

class PoemsContainer extends React.Component {
  state = {
    poems: []
  }

  componentDidMount() {
    fetch('http://localhost:6001/poems')
      .then(resp => resp.json())
      .then(poems => this.setState({poems: poems}))
  }

  mapPoems = () => {
    return this.state.poems.map(poem => { return <Poem poem={poem} key={poem.id} /> })
  }

  render() {
    return (
      <div className="poems-container">
        {
          this.mapPoems()
        }
      </div>
    );
  }
}

export default PoemsContainer;

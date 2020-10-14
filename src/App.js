import React from "react";
import "./App.css";
import PoemsContainer from "./PoemsContainer";
import NewPoemForm from "./NewPoemForm";

class App extends React.Component {

  state={
    poems: []
  }

  componentDidMount() {
    fetch('http://localhost:6001/poems')
    .then(resp => resp.json())
    .then(resp => this.setState({ poems: resp}))
    .catch(console.log)
  }

  render() {
    return (
      <div className="app">
        <div className="sidebar">
          <button>Show/hide new poem form</button>
          {false && <NewPoemForm />}
        </div>
        <PoemsContainer poems={this.state.poems} />
      </div>
    );
  }
}

export default App;

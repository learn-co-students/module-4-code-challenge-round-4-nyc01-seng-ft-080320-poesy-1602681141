import React from "react";
import "./App.css";
import PoemsContainer from "./PoemsContainer";
import NewPoemForm from "./NewPoemForm";

class App extends React.Component {
  state = {
    api: []
  }
  componentDidMount() {
    fetch("http://localhost:3000/poems")
      .then(response => response.json())
      .then(data => this.setState({ api: data }))
      .catch(console.log)
  }





  render() {
    return (
      <div className="app">
        <div className="sidebar">
          <button>Show/hide new poem form</button>
          {false && <NewPoemForm />}
        </div>
        <PoemsContainer poems={this.state.api} />
      </div>
    );
  }
}

export default App;

import React from "react";
import "./App.css";
import PoemsContainer from "./Containers/PoemsContainer";
import NewPoemForm from "./NewPoemForm";

class App extends React.Component {

  state={
    poemsURL: "http://localhost:3000/poems/",
    poems: []
  }

  fetchPoems = () => {
    fetch(this.state.poemsURL)
    .then(resp => resp.json())
    .then(data => {
      this.setState({poems: data})
    })
  }

  componentDidMount() {
    this.fetchPoems()
  }


  render() {
    return (
      <div className="app">
        <div className="sidebar">
          {/* <button>Show/hide new poem form</button>
          {false && <NewPoemForm />} */}
        </div>
        <PoemsContainer poems={this.state.poems}/>
      </div>
    );
  }
}

export default App;

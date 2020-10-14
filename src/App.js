import React from "react";
import "./App.css";
import PoemsContainer from "./Containers/PoemsContainer";
import NewPoemForm from "./Components/NewPoemForm";

class App extends React.Component {

  state={
    poemsURL: "http://localhost:3000/poems/",
    poems: [],
    formStatus: false
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

  toggleForm = () => {
    this.setState(prevState => {
      return {
        formStatus: !prevState.formStatus
      }
    })
  }


  render() {
    return (
      <div className="app">
        <div className="sidebar">
          <button onClick={this.toggleForm}>Show/hide new poem form</button>
          {this.state.formStatus && <NewPoemForm />}
        </div>
        <PoemsContainer poems={this.state.poems}/>
      </div>
    );
  }
}

export default App;

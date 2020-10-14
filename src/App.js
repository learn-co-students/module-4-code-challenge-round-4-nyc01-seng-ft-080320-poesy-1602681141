import React from "react";
import "./App.css";
import PoemsContainer from "./PoemsContainer";
import NewPoemForm from "./NewPoemForm";

class App extends React.Component {

  state={
    poems: [],
    showForm: false
  }

  componentDidMount() {
    fetch('http://localhost:6001/poems')
    .then(resp => resp.json())
    .then(resp => this.setState({ poems: resp}))
    .catch(console.log)
  }

  toggleShowForm = () => {
    this.setState({ showForm: !this.state.showForm})
  }

  newPoemSubmitHandler = (poemObj) => {
    console.log("submitting")
    fetch('http://localhost:6001/poems', {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "accepts": "application/json"
      },
      body: JSON.stringify(poemObj)
    })
    .then(resp => resp.json())
    .then(newPoem => {
      let newArray = [...this.state.poems, newPoem]
      this.setState({ poems: newArray})
    })
    .catch(console.log)
  }

  render() {
    console.log(this.state.showForm)
    return (
      <div className="app">
        <div className="sidebar">
          <button onClick={this.toggleShowForm}>Show/hide new poem form</button>
          {this.state.showForm ? <NewPoemForm submitHandler={this.newPoemSubmitHandler} /> : null}
        </div>
        <PoemsContainer poems={this.state.poems} />
      </div>
    );
  }
}

export default App;

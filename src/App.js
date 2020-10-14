import React from "react";
import "./App.css";
import PoemsContainer from "./PoemsContainer";
import NewPoemForm from "./NewPoemForm";

class App extends React.Component {
  
  state = {
    api : [],
    clicked : true
  }
  componentDidMount() {
    fetch("http://localhost:6001/poems")
    .then(resp => resp.json())
    .then(poems => {
      this.setState({api : poems})
    })
    }
  
  formShow = () => {
    this.setState((prevState) => ({clicked: !prevState.clicked}))
  }
  
  submitHandler = (poem) => {
    fetch("http://localhost:6001/poems", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(poem)
    })
      .then(resp => resp.json())
      .then(newPoem => {
        let newArray = [...this.state.api, newPoem]
        this.setState({api : newArray})
      })
  }
  
  render() {
    return (
      <div className="app">
        <div className="sidebar">
          <button onClick={this.formShow}>Show/hide new poem form</button>
          {this.state.clicked? <NewPoemForm submitHandler={this.submitHandler}/> : null}
        </div>
        <PoemsContainer poems={this.state.api} />
      </div>
    );
  }
}

export default App;

import React from "react";
import "./App.css";
import PoemsContainer from "./PoemsContainer";
import NewPoemForm from "./NewPoemForm";

class App extends React.Component {

  state = {
    api: [],
    clicked: true
  }

  componentDidMount() {
    fetch("http://localhost:6001/poems")
    .then(response => response.json())
    .then(data => this.setState({api: data}))
  }

  submitHandler = (poemObj) => {
    console.log("Poem to submit:", poemObj)
    fetch("http://localhost:6001/poems", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        accept: "application/json"
      },
      body: JSON.stringify(poemObj)
    })
    .then(response => response.json())
    .then(newPoem => {
      let newArray = [...this.state.api, newPoem]
      this.setState({api: newArray})
    })
    
  }

  clickHandler = () => {
    this.setState(prevState => ({clicked: !prevState.clicked}))
  }

  render() {
    return (
      <div className="app">
        <div className="sidebar">
          <button onClick={this.clickHandler}>Show/hide new poem form</button>
          {this.state.clicked ? 
          <NewPoemForm submitHandler={this.submitHandler} />
          :
          false && <NewPoemForm />
          }
        </div>
        <PoemsContainer poems={this.state.api}/>
      </div>
    );
  }
}

export default App;

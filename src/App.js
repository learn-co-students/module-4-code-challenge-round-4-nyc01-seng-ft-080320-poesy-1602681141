import React from "react";
import "./App.css";
import PoemsContainer from "./PoemsContainer";
import NewPoemForm from "./NewPoemForm";


const BASE_API = "http://localhost:6001/poems"
class App extends React.Component {

  state = {
    poems: [],
    favorites: [],
    reveal: false
  }

  componentDidMount = () => {
    fetch(BASE_API)
    .then(resp => resp.json())
    .then(poems => {
      this.setState({poems: poems})
    })
  }

  reveal = () => {
    this.setState({reveal: !this.state.reveal})
  }

  optimisticPoem =(poem)=>{
    this.setState(prevState => {
      return {poems: [...prevState.poems, poem]}
    })
  }

  newPoemHandler = (e) => {
    e.preventDefault()
    let newPoemInfo = e.target
    let poemObj = {title: newPoemInfo.title.value, content: newPoemInfo.content.value, author: newPoemInfo.author.value}
    let configObj = {
      method: "POST",
      headers: {"content-type": "application/json",
    "accepts": "application/json"},
    body: JSON.stringify(poemObj)
    }
    this.optimisticPoem(poemObj)
    fetch(BASE_API, configObj)
    .then(resp => resp.json())
    .then(console.log)
    e.target.reset()
  }
  render() {
    return (
      <div className="app">
        <div className="sidebar">
          <button onClick={this.reveal}>Show/hide new poem form</button>
          {this.state.reveal && <NewPoemForm newPoemHandler={this.newPoemHandler} />}
        </div>
        <PoemsContainer poems={this.state.poems} />
      </div>
    );
  }
}

export default App;

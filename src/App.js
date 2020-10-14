import React from "react";
import "./App.css";
import PoemsContainer from "./PoemsContainer";
import NewPoemForm from "./NewPoemForm";
// import Favorites from "./Favorites"

class App extends React.Component {
  
  state = {
    api : [],
    clicked : true,
    // favorites: []
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

  // faveClick = (poemId) => {
  //   let poems = [...this.state.api]
  //   let favePoem = poems.find(el => el.id === poemId)
  //   let faveArr = [...this.state.favorite, favePoem]
  //   this.setState({favorite : faveArr})

  // }

  
  render() {
    return (
      <div className="app">
        <div className="sidebar">
          <button onClick={this.formShow}>Show/hide new poem form</button>
          {this.state.clicked? <NewPoemForm submitHandler={this.submitHandler}/> : null}
          {/* <Favorites favorites={this.state.favorites}/> */}
        </div>
        <PoemsContainer poems={this.state.api} faveClick={this.faveClick} />
      </div>
    );
  }
}

export default App;

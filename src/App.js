import React from "react";
import "./App.css";
import PoemsContainer from "./PoemsContainer";
import NewPoemForm from "./NewPoemForm";
import Favorites from "./Favorites"

const BASE_API = "http://localhost:6001/poems/"
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
      .catch(console.log)
  }

  reveal = () => {
    this.setState({reveal: !this.state.reveal})
  }

  theyLikeMe = (poem) => {
    if (!this.state.favorites.includes(poem)){
    this.setState(prevState => {
      return {favorites: [...prevState.favorites, poem]}
    })
  }
  }
  
  theyHateMe = (poem) => {
    let newArray = this.state.favorites.filter(old => old !== poem)
    console.log(newArray)
    this.setState({favorites: newArray})
  }

  optimisticPoem =(poem)=>{
    this.setState(prevState => {
      return {poems: [...prevState.poems, poem]}
    })
  }

  deletePoem = (id) => {
    fetch(BASE_API + id, {method: "DELETE"})
    this.setState(prevState => {
      let newArray = prevState.poems.filter(poem => poem.id !== id)
      return {poems: newArray}
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
    // CHANGED TO PESSIMISTIC RENDERING FOR DELETE TO WORK WITH ID  BUT IF THERE'S AN ERROR IT WILL OPTIMISTICALLY RENDER
    fetch(BASE_API, configObj)
    .then(resp => resp.json())
    .then(poem => {
      this.setState(prevState=> {
        return {poems: [...prevState.poems, poem]}
      })
    })
    .catch(error=> {
      console.log(error)
      this.optimisticPoem(poemObj)
    })
    e.target.reset()
  }
  render() {
    return (
      <div className="app">
        <div className="sidebar">
          <button onClick={this.reveal}>Show/hide new poem form</button>
          {this.state.reveal && <NewPoemForm newPoemHandler={this.newPoemHandler} />}
          <Favorites poems={this.state.favorites} theyHateMe={this.theyHateMe}/>
        </div>
        <PoemsContainer poems={this.state.poems} deletePoem={this.deletePoem} theyLikeMe={this.theyLikeMe}/>
      </div>
    );
  }
}

export default App;

import React from "react";
import "./App.css";
import PoemsContainer from "./PoemsContainer";
import NewPoemForm from "./NewPoemForm";
import FavoritesContainer from "./FavoritesContainer";

let API = `http://localhost:6001/poems/`

class App extends React.Component {


  state = {
    poems: [],
    favorites: [],
    show: false,
    title: "",
    author: "",
    content: "",
  }

  //-----------------------------------------------------------------

  showClickHandler = () => {
    this.setState({show: !this.state.show})
  }
  
  likeHandler = (poem) => {
    this.setState(currentState => {
      if(currentState.favorites.includes(poem))
      {console.log("already favorite")}
      else{let newArr = [...currentState.favorites, poem]
      return {favorites: newArr}
      }
    })
  }

  unlikeHandler = (poem) => {
    let foundPoem = this.state.favorites.indexOf(poem)
    this.setState(currentState => {
      currentState.favorites.splice(parseInt(foundPoem, 10), 1)
      let newArr = this.state.favorites
      return {favorites: newArr}
    })
  }
  changeHandler = (e) => { 
    this.setState({[e.target.name]: e.target.value})
  }

// Fetches -----------------------------------------------------

  submitHandler = (e) => {
    let title = e.target[0].value
    let author = e.target[1].value
    let content = e.target[2].value

    let options = {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "accept": "application/json"
      },
      body: JSON.stringify({
        title: title,
        content: content,
        author: author
      }) 
    }

    fetch(API, options)
    .then(resp=> resp.json())
    .then(newPoem => {
      let newPoems = [...this.state.poems, newPoem]
      this.setState({poems: newPoems, show: false})
    })
    .catch(console.log)

    e.target.reset()
    
  }

  deleteHandler = (poem) => {

    let options = {
      method: "DELETE",
      headers:{
        "content-type": "application/json",
        "accept": "application/json"
      }
    }
    
    fetch(API+`${poem.id}`, options)
    .then(resp=> resp.json())
    .then(console.log)

    let foundPoem = this.state.poems.indexOf(poem)
    this.setState(currentState => {
      currentState.poems.splice(parseInt(foundPoem, 10), 1)
      let newArr = this.state.poems
      return {poems: newArr}
    })
  }


  //------------------------------------------------------------

  componentDidMount= () => {
    fetch(API)
    .then(resp=>resp.json())
    .then(api => this.setState({poems: api}))
  }

  //------------------------------------------------------------

  render() {
    return (
      <div className="app">
        <div className="sidebar">
          <button onClick={this.showClickHandler}>Show/hide new poem form</button>
          {(this.state.show) ? <NewPoemForm author={this.state.author} title={this.state.title} content={this.state.content} changeHandler={this.changeHandler} submitHandler={this.submitHandler}/> : "" }
        </div>
        <PoemsContainer poems={this.state.poems} likeClicker={this.likeHandler} deleteHandler={this.deleteHandler}/>
        <FavoritesContainer poems={this.state.favorites} unlikeClicker={this.unlikeHandler}/>
      </div>
    );
  }
}

export default App;

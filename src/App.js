import React from "react";
import "./App.css";
import PoemsContainer from "./PoemsContainer";
import NewPoemForm from "./NewPoemForm";
import FavoriteContainer from './FavoriteContainer'

const ApiUrl = 'http://localhost:3000/poems/'
class App extends React.Component {
  state= {
    showForm: false,
    poems: [],
    readPoems: [],
    favoritedPoems: [],
  }

  
  componentDidMount() {
    fetch(ApiUrl)
    .then(res => res.json())
    .then(data => this.setState({poems: data}))
  }

  addPoem = (poem) => {
    let options = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "content-type": "application/json"
      },
      body: JSON.stringify ({
        title: poem.title,
        content: poem.content,
        author: poem.author,
      })
    }
    fetch(ApiUrl, options)
    .then(res => res.json())
    .then(poem => {
      let newArr = [...this.state.poems, poem]
      this.setState({
        poems: newArr
      })
    })
  }

  removePoem = (poem) => {
    let options = {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "content-type": "application/json"
      }
    }
    fetch(ApiUrl + poem.id, options)
    .then(res => res.json())
    .then(poem => {
      let newArr = [...this.state.poems]
      let index = newArr.indexOf(poem)
      newArr.splice(index, 1)
      this.setState({
        poems: newArr
      })
    })
  }

  addRemoveReadPoem = poem => {
    let poemArr = [...this.state.readPoems]
    if(this.state.readPoems.includes(poem)) {
      let index= poemArr.indexOf(poem)
      poemArr.splice(index, 1)
      this.setState({
        readPoems: poemArr
      })
    } 
    else {
      poemArr = [...this.state.readPoems, poem]
      this.setState({readPoems: poemArr})
    }
  }

  favoritePoem = (poem) => {
    if(!this.state.favoritedPoems.includes(poem)) {
      let poemArr = [...this.state.favoritedPoems, poem]
      this.setState({favoritedPoems: poemArr})
      console.log('favorited')
    }
    else {
      console.log('already favorited')
    }
  }

  render() {
    return (
      <div className="app">
        <div className="sidebar">
          <button onClick={() => this.setState(prevState => ({showForm: !prevState.showForm}))}>Show/hide new poem form</button>
          {this.state.showForm ? <NewPoemForm createPoem={this.addPoem}/> : false}
          <FavoriteContainer poems={this.state.favoritedPoems}/>
        </div>
        <PoemsContainer delete={this.removePoem} poems={this.state.poems} readPoems={this.state.readPoems} toggleReadPoem={this.addRemoveReadPoem} favorite={this.favoritePoem}/>
      </div>
    );
  }
}

export default App;

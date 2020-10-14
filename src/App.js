import React from "react";
import "./App.css";
import PoemsContainer from "./PoemsContainer";
import NewPoemForm from "./NewPoemForm";
import FavoritesContainer from './FavoritesContainer'
const URL = 'http://localhost:6001/poems/'

class App extends React.Component {


  state = {
    poems: [],
    favorites: [],
    formClicked: false
  }

  componentDidMount() { 
    fetch(URL)
      .then(resp => resp.json())
      .then(data => this.setState({ poems: data }))
  }

  showForm = () => {
    this.setState((prevState) => ({ formClicked: !prevState.formClicked }))
  }

  addPoem = (newTitle, newAuthor, newContent) => {
    fetch(URL, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'accepts': 'application/json'
      },
      body: JSON.stringify({
        title: newTitle,
        author: newAuthor,
        content: newContent
      })
    })
    .then(resp => resp.json())
    .then( newPoem => this.setState({ poems: [...this.state.poems, newPoem ]}))
  }

  addToFavorites = (poem) => {
    this.setState({ favorites: [...this.state.favorites, poem]})
  }

  removeFavorite = (poem) => {
    let newArray = this.state.favorites.filter(favorited => favorited.id !== poem.id )
  }

  deletePoem = (poem) => {
    fetch(URL + poem.id, {
      method: "DELETE",
      headers: {
        'content-type': 'application/json',
        'accepts': 'application/json'
      },
    })
      .then(resp => resp.json)
      .then(this.componentDidMount())
  }

  render() {
    return (
      <div className="app">
        <div className="sidebar">
          <button onClick={() => {this.showForm()}}>Show/hide new poem form</button>
          {this.state.formClicked ? <NewPoemForm addPoem={this.addPoem} /> : null}
          <h2>Favorites</h2>
          <FavoritesContainer favorites={this.state.favorites} removeFavorite/>
        </div>
        <PoemsContainer poems={this.state.poems} addToFavorites={this.addToFavorites} deletePoem={this.deletePoem}/>
      </div>
    );
  }
}

export default App;

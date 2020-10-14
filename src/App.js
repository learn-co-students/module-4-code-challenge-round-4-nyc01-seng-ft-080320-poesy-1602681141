import React from "react";
import "./App.css";
import PoemsContainer from "./Containers/PoemsContainer";
import NewPoemForm from "./Components/NewPoemForm";
import Favorites from "./Containers/Favorites";

class App extends React.Component {

  state={
    poemsURL: "http://localhost:3000/poems/",
    poems: [],
    favorites: [],
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

  addPoem = (newPoem) => {
    let options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accepts": "application/json"
      },
      body: JSON.stringify(newPoem)
    }

    fetch(this.state.poemsURL, options)
    .then(resp => resp.json())
    .then(poem => {
      this.setState(prevState => {
        return {
          poems: [...prevState.poems, poem]
        }
      })
    })
  }

  deletePoem = (poem) => {
    fetch(this.state.poemsURL+poem.id, {method: "DELETE"})
    .then(resp => resp.json())
    .then(deletedPoem => {
      let newPoems = [...this.state.poems]
      let oldPoemIndex = newPoems.findIndex(p => p.id === poem.id)
      newPoems.splice(oldPoemIndex, 1)
      this.setState({poems: newPoems})
    })
  }

  favoritePoem = (poem) => {
    if (!this.state.favorites.find(fav => fav.id === poem.id)) {
      this.setState(prevState => {
        return {
          favorites: [...prevState.favorites, poem]
        }
      })
    }
  }

  unfavoritePoem = (poem) => {
    let newFavs = [...this.state.favorites]
    let favIndex = newFavs.findIndex(p => p.id === poem.id)
    newFavs.splice(favIndex, 1)
    this.setState(prevState => {
      return {
        favorites: newFavs
      }
    })
  }




  render() {
    return (
      <div className="app">
        <div className="sidebar">
          <button onClick={this.toggleForm}>Show/hide new poem form</button>
          {this.state.formStatus && <NewPoemForm addPoem={this.addPoem}/>}
        </div>
        <PoemsContainer poems={this.state.poems} deletePoem={this.deletePoem} favoritePoem={this.favoritePoem}/>
        <Favorites poems={this.state.favorites} unfavoritePoem={this.unfavoritePoem}/>
      </div>
    );
  }
}

export default App;
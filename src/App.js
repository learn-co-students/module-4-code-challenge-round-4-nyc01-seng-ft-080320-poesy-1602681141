import React from "react";
import "./App.css";
import PoemsContainer from "./PoemsContainer";
import NewPoemForm from "./NewPoemForm";
import FavoritesContainer from './FavoritesContainer';

class App extends React.Component {
  state = {
    showForm: false,
    poems: [],
    favorites: [] // not making this persist because presumably favorites are unique to each user
                  // and users aren't part of our domain model right now
  }

  // lifted this to App because two children of App need access to the poems array:
  // PoemsContainer needs it to render the poems, and 
  // NewPoemForm needs it to add poems.
  componentDidMount() {
    fetch('http://localhost:6001/poems')
      .then(resp => resp.json())
      .then(poems => this.setState({poems: poems}))
  }

  handleClick = () => {
    this.setState(prevState => ({showForm: !prevState.showForm}))
  }

  toggleFavorite = poem => {
    if (!this.state.favorites.find(favorite => { return favorite === poem })) {
      this.setState(prevState => ({
        favorites: [...prevState.favorites, poem]
      }))
    } else {
      const newFavorites = this.state.favorites.filter(favorite => { return favorite !== poem })
      this.setState({favorites: newFavorites})
    }
  }

  appHandleSubmit = formData => {
    fetch('http://localhost:6001/poems', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accepts": "application/json"
      }, 
      body: JSON.stringify(formData)
    })
      .then(resp => resp.json())
      .then(newPoem => {
        this.setState(prevState => ({
          poems: [...prevState.poems, newPoem]
        }));
      });
  }

  render() {
    return (
      <div className="app">
        <div className="sidebar">
          <button name="showForm" onClick={this.handleClick}>Show/hide new poem form</button>
          {this.state.showForm && <NewPoemForm appHandleSubmit={this.appHandleSubmit} />}
        </div>
        <PoemsContainer poems={this.state.poems} toggleFavorite={this.toggleFavorite} />
        <FavoritesContainer favorites={this.state.favorites} />
      </div>
    );
  }
}

export default App;

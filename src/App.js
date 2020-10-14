import React from "react";
import "./App.css";
import PoemsContainer from "./PoemsContainer";
import NewPoemForm from "./NewPoemForm";
// import FavoritesList from './FavoritesList';

class App extends React.Component {

  state = {
    poems: [],
    showForm: false,
    favorites: []
  }

  componentDidMount() {
    fetch("http://localhost:6001/poems")
      .then(res => res.json())
      .then(data => this.setState({ poems: data }))
  }

  clickHandler = () => {
    this.setState((prevState) => ({showForm: !prevState.showForm}))
  }

  submitHandler = poemObject => {
    fetch("http://localhost:6001/poems", {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        accepts: 'application/json'
      },
      body: JSON.stringify(poemObject)
    })
      .then(res => res.json())
      .then(newPoem => {
        let newArray = [newPoem, ...this.state.poems]
        this.setState({ poems: newArray })
      })
      .catch(console.log)
  }

  // addToFavorites = id => {
  //   let newArray = [...this.state.poems]
  //   let favoriteObject = newArray.find(el => el.id === id)
  //   let newFavoriteArray = [favoriteObject, ...this.state.favorites]
  //   this.setState({ favorites: newFavoriteArray })
  // }

  render() {
    return (
      <div className="app">
        <div className="sidebar">
          <button onClick={this.clickHandler} >Show/hide new poem form</button>
          {this.state.showForm ? <NewPoemForm submitHandler={this.submitHandler} /> : null}
        </div>
        <PoemsContainer poems={this.state.poems} addToFavorites={this.addToFavorites} />
        {/* <FavoritesList poems={this.state.favorites} /> */}
      </div>
    );
  }
}

export default App;

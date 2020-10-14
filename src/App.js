import React from "react";
import "./App.css";
import PoemsContainer from "./Containers/PoemsContainer";
import NewPoemForm from "./Components/NewPoemForm";
import Favorites from "./Containers/Favorites"

const API = 'http://localhost:6001/poems/'

class App extends React.Component {

  state = {
    api: [],
    formClicked: false,
    favorites: []
  }

  componentDidMount() {
    fetch(API).then(resp => resp.json()).then(poems =>
      this.setState({
        api: poems
      })
    )
  }

  formHandle = () => {
    this.setState(prevState => ({
      formClicked: !prevState.formClicked
    }))
  }

  postPoem = form => {
    fetch(API, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        accepts: "application/json"
      },
      body: JSON.stringify(form)
    }).then(resp => resp.json()).then(poem => 
      this.setState(prevState => ({
      api: [...prevState.api, poem],
    })))
  }

  deletePoem = poemObj => {
    fetch(API + poemObj.id, {
      method: "DELETE"
    }).then(resp => resp.json()).then( data => {
      let newArray = this.state.api.filter(poem => poem.id !== poemObj.id)
      this.setState({
        api: newArray
      })
    })
  }

  addFavorite = poem => {
    this.setState(prevState => ({
      favorites: [...prevState.favorites, poem]
    }))
  }



  render() {
    console.log(this.state.favorites)
    return (
      <div className="app">
        <div className="sidebar">
          <button onClick={this.formHandle}>Show/hide new poem form</button>
          {this.state.formClicked ? <NewPoemForm post={this.postPoem} /> : null}
        </div>
        <PoemsContainer favorite={this.addFavorite} delete={this.deletePoem} poems={this.state.api} />
        <Favorites favorites={this.state.favorites} />
      </div>
    );
  }
}

export default App;

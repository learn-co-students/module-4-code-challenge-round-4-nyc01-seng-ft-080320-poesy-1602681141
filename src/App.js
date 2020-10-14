import React from "react";
import "./App.css";
import PoemsContainer from "./Containers/PoemsContainer";
import NewPoemForm from "./Components/NewPoemForm";
import FavoriteContainer from "./Containers/FavoriteContainer"

const API = 'http://localhost:6001/poems/'

class App extends React.Component {

  state = {
    poems: [],
    showForm: false,
    favoritePoems: []
  }

  componentDidMount = () => {
    fetch(API)
    .then(resp => resp.json())
    .then(poemData => this.setState({
      poems: poemData
    }))
  }

  renderForm = () => {
    this.setState(prevState => {
      return {
        showForm: !prevState.showForm
      }
    })
  }

  handleSubmit = (form) => {
    let poem = {
      title: form.title.value,
      content: form.content.value,
      author: form.author.value
    }

    let options = {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        'accept': 'application/json'
      },
      body: JSON.stringify(poem)
    }

    fetch(API, options)
    .then(resp => resp.json())
    .then(newPoem => {
      let newPoemArray = [newPoem, ...this.state.poems]
      this.setState({
        poems: newPoemArray
      })
    })
  }

  handleDelete = (poemObj) => {
    let options = {
      method: 'DELETE'
    }

    fetch(API + poemObj.id, options)
    .then(resp => resp.json())
    .then(() => {
      let poemArray = [...this.state.poems]
      let index = poemArray.indexOf(poemObj)
      poemArray.splice(index, 1)
      this.setState({
        poems: poemArray
      })
    })
  }

  favoriteHandler = (poemObj) => {
    if(this.state.favoritePoems.includes(poemObj)){
      let poemArray = [...this.state.favoritePoems]
      let index = poemArray.indexOf(poemObj)
        poemArray.splice(index, 1)
        this.setState({
          favoritePoems: poemArray
        })
    }
    else{
      let newFavPoems = [poemObj,...this.state.favoritePoems]
    this.setState({
      favoritePoems: newFavPoems
    })

  }}

  render() {
    return (
      <div className="app">
        <div className="sidebar">
          <button onClick={this.renderForm}>Show/hide new poem form</button>
          {this.state.showForm ? <NewPoemForm handleSubmit={this.handleSubmit}/> : null}
        </div>
        <PoemsContainer poems={this.state.poems} favoriteHandler={this.favoriteHandler} handleDelete={this.handleDelete}/>
        < FavoriteContainer favPoems={this.state.favoritePoems}/>
      </div>
    );
  }
}

export default App;

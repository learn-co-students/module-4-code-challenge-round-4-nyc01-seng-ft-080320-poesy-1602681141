import React from "react";
import "./App.css";
import PoemsContainer from "./PoemsContainer";
import NewPoemForm from "./NewPoemForm";
import FavoritesContainer from './FavoritesContainer'

class App extends React.Component {

  state = {
    resp: [],
    form: {
      visible: false,
    }
  }
  
  favoritePoems = () => {
    return this.state.resp.filter(p => p.favorited)
  }

  unFav = (poem) => {
    

    fetch(`http://localhost:3000/poems/${poem.id}`, {
      method: 'PATCH',
      headers: {
        accepts: 'application/json',
        'content-type': 'application/json'
      },
      body: JSON.stringify({favorited: false})
    })
    .then( r => r.json())
    .then(r => {
      let newPoems = [...this.state.resp]
      let foundPoem = newPoems.find(p => p.id === poem.id)
      foundPoem.favorited = false;
      this.setState({ resp: newPoems })
    })
    
  }

  favPoem = (poem) => {
    

    fetch(`http://localhost:3000/poems/${poem.id}`, {
      method: 'PATCH',
      headers: {
        accepts: 'application/json',
        'content-type': 'application/json'
      },
      body: JSON.stringify({favorited: true})
    })
    .then( r => r.json())
    .then(r => {
      let newPoems = [...this.state.resp]
      let foundPoem = newPoems.find(p => p.id === poem.id)
      foundPoem.favorited = true;
      this.setState({ resp: newPoems })
    })
    
  }

  submitHandler = e => {
    e.preventDefault()
    e.persist()

    let newPoemObj = {
      title: e.target.title.value,
      author: e.target.author.value,
      content: e.target.content.value
    }
    //console.log('poemObj', newPoemObj)

    fetch('http://localhost:3000/poems', {
      method: 'POST',
      headers: {
        accept: 'application/json',
        'content-type': 'application/json'
      },
      body: JSON.stringify(newPoemObj)
    })
    .then( r => r.json())
    .then (addedPoem => {
      //prepend the list
      this.setState(ps => ({ resp: [...ps.resp, addedPoem]}))

    })
  }

  toggleForm = () => {
    this.setState(ps => ({
      resp: [...ps.resp],
      form: {
        ...ps.form,
        visible: !ps.form.visible
      }
    }))
  }

  componentDidMount() {
    fetch('http://localhost:3000/poems')
    .then(r => r.json())
    .then(poems => this.setState({ resp: poems}))
  }

  render() {
    console.log('current render state', this.state)
    return (
    
      <div className="app">
        <div className="sidebar">
          <button
            onClick={this.toggleForm}
          >Show/hide new poem form</button>
          {this.state.form.visible && <NewPoemForm submitHandler ={this.submitHandler} />}
        </div>
        <PoemsContainer
          poems = {this.state.resp}
          favHandler= {this.favPoem}
          isfav = {false}
        />
        <h2>Favorites</h2>
        <FavoritesContainer
          poems = {this.favoritePoems()}
          favHandler ={this.unFav}
          isfav = {true}
        />
      </div>
    );
  }
}

export default App;

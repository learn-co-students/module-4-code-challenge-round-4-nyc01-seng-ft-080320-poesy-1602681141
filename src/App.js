import React from "react";
import "./App.css";
import PoemsContainer from "./PoemsContainer";
import NewPoemForm from "./NewPoemForm";

const API = 'http://localhost:6001/poems/'

class App extends React.Component {

  state = {
    poems: [],
    showForm: false
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

  render() {
    return (
      <div className="app">
        <div className="sidebar">
          <button onClick={this.renderForm}>Show/hide new poem form</button>
          {this.state.showForm ? <NewPoemForm handleSubmit={this.handleSubmit}/> : null}
        </div>
        <PoemsContainer poems={this.state.poems}/>
      </div>
    );
  }
}

export default App;

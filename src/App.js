import React from "react";
import "./App.css";
import PoemsContainer from "./PoemsContainer";
import NewPoemForm from "./NewPoemForm";

const ApiUrl = 'http://localhost:3000/poems/'
class App extends React.Component {
  state= {
    showForm: false,
    poems: [],
    readPoems: []
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

  addRemoveReadPoem = poem => {
    let poemArr = [...this.state.readPoems]
    if(this.state.readPoems.includes(poem)) {
      let index= poemArr.indexOf(poem)
      poemArr.splice(index, 1)
      this.setState({
        readPoems: poemArr
      })
      console.log('removed')
    } 
    else {
      poemArr = [...this.state.readPoems, poem]
      this.setState({readPoems: poemArr})
      console.log('added')
    }
  }

  render() {
    return (
      <div className="app">
        <div className="sidebar">
          <button onClick={() => this.setState(prevState => ({showForm: !prevState.showForm}))}>Show/hide new poem form</button>
          {this.state.showForm ? <NewPoemForm createPoem={this.addPoem}/> : false}
        </div>
        <PoemsContainer poems={this.state.poems} readPoems={this.state.readPoems} toggleReadPoem={this.addRemoveReadPoem}/>
      </div>
    );
  }
}

export default App;

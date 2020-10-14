import React from "react";
import "./App.css";
import PoemsContainer from "./PoemsContainer";
import NewPoemForm from "./NewPoemForm";

class App extends React.Component {

  state = {
    poems: [],
    formOccultist: true,
  }

  formHandler = () => {
    let clickedForm = !this.state.formOccultist
    this.setState({
      formOccultist: clickedForm
    })
    // if(this.state.formOccultist == true) {
    //   return <NewPoemForm submitHandler={this.submitHandler}/>
    // } else {
    //    return null
    // }
  }

  submitHandler = (event) => {
    event.preventDefault()

    fetch('http://localhost:6001/poems', {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "accepts": "application/json"
      },
      body: JSON.stringify({
        title: event.target[0].value,
        content: event.target[1].value,
        author: event.target[2].value
      })
    })
    .then(response => response.json())
    .then(newPoem => {
      let newPoems = [...this.state.poems, newPoem]
      this.setState({
        poems: newPoems
      })
    })
  }

  deleteHandler = (id) => {
    fetch('http://localhost:6001/poems/' + id, {
      method: "DELETE"
    })
    .then(response => response.json())
    .then(res => {
      let newList = this.state.poems.filter(poem => poem.id != id)
      this.setState({
        poems: newList
      })
    })

  }

  render() {
    return (
      <div className="app">
        <div className="sidebar">
          <button onClick={this.formHandler}>Show/hide new poem form</button>
          <div>
            <NewPoemForm submitHandler={this.submitHandler} />
          </div>
        </div>
        <PoemsContainer poems={this.state.poems} deleteHandler={this.deleteHandler} />
      </div>
    );
  }

  componentDidMount() {
    fetch('http://localhost:6001/poems')
    .then(response => response.json())
    .then(poemsList => this.setState({poems: poemsList}))
  }

}

export default App;

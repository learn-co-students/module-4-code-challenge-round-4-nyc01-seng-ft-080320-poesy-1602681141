import React from "react";
import "./App.css";
import PoemsContainer from "./PoemsContainer";
import NewPoemForm from "./NewPoemForm";

class App extends React.Component {

  state = {
    poems: [],
    showForm: false
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

  render() {
    return (
      <div className="app">
        <div className="sidebar">
          <button onClick={this.clickHandler} >Show/hide new poem form</button>
          {this.state.showForm ? <NewPoemForm submitHandler={this.submitHandler} /> : null}
        </div>
        <PoemsContainer poems={this.state.poems} />
      </div>
    );
  }
}

export default App;

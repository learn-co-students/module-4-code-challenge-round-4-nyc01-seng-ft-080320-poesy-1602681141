import React from "react";
import "./App.css";
import PoemsContainer from "./PoemsContainer";
import NewPoemForm from "./NewPoemForm";
import ToggleBox from "./ToggleBox"

class App extends React.Component {
  state = {
    api: []
  }
  componentDidMount() {
    fetch("http://localhost:3000/poems")
      .then(response => response.json())
      .then(data => this.setState({ api: data }))
      .catch(console.log)
  }
  submitHandler = (obj) => {
    fetch('http://localhost:3000/poems', {

      method: "POST",
      headers: {
        "content-type": "application/json",
        "accept": "application/json"
      },
      body: JSON.stringify(obj)
    })
      .then(response => response.json())
      .then(newpoem => {
        let newArray = [obj, ...this.state.api]
        this.setState({ api: newArray }, () => console.log('new state:', this.state.api))
      })
      .catch(console.log)
  }


  render() {
    return (
      <div className="app">
        <div className="sidebar" >
          <button>
            <ToggleBox title="Show form">
              <NewPoemForm mySubmit={this.submitHandler} />
            </ToggleBox>
          </button>

        </div>
        <PoemsContainer poems={this.state.api} />
      </div>
    );
  }
}

export default App;

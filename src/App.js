import React from "react";
import "./App.css";
import PoemsContainer from "./PoemsContainer";
import NewPoemForm from "./NewPoemForm";

class App extends React.Component {
  state = {
    showForm: false,
    poems: []
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
          <button onClick={this.handleClick}>Show/hide new poem form</button>
          {this.state.showForm && <NewPoemForm appHandleSubmit={this.appHandleSubmit} />}
        </div>
        <PoemsContainer poems={this.state.poems} />
      </div>
    );
  }
}

export default App;

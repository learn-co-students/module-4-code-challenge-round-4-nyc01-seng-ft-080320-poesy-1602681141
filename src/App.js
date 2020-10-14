import React from "react";
import "./App.css";
import PoemsContainer from "./PoemsContainer";
import NewPoemForm from "./NewPoemForm";
 
class App extends React.Component {
  
  state = {
    api: [],
    clicked: false
  }

  componentDidMount() {
    fetch("http://localhost:6001/poems")
      .then(res => res.json())
      .then(resp => this.setState({ api: resp}))
      .catch(console.log)
  }
  
  clickHandler = () => {
    console.log("clicking")
    this.setState((prevState) => ({ clicked: !prevState.clicked }))
  }

  render() {
    return (
      <div className="app">
        <div className="sidebar">
          <button onClick={this.clickHandler}>Show/hide new poem form</button>
          {this.state.clicked ? <NewPoemForm /> : null }
        </div>
        <PoemsContainer poems={this.state.api} />
      </div>
    );
  }
}

export default App;



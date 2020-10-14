import React from "react";
import "./App.css";
import PoemsContainer from "./PoemsContainer";
import NewPoemForm from "./NewPoemForm";

class App extends React.Component {

  state={
    poems: [],
    showForm: false
  }

  componentDidMount() {
    fetch('http://localhost:6001/poems')
    .then(resp => resp.json())
    .then(resp => this.setState({ poems: resp}))
    .catch(console.log)
  }

  toggleShowForm = () => {
    this.setState({ showForm: !this.state.showForm})
  }

  render() {
    console.log(this.state.showForm)
    return (
      <div className="app">
        <div className="sidebar">
          <button onClick={this.toggleShowForm}>Show/hide new poem form</button>
          {this.state.showForm ? <NewPoemForm /> : null}
        </div>
        <PoemsContainer poems={this.state.poems} />
      </div>
    );
  }
}

export default App;

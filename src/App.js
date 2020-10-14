import React from "react";
import "./App.css";
import PoemsContainer from "./PoemsContainer";
import NewPoemForm from "./NewPoemForm";

class App extends React.Component {
  state = {
    poemList: [],
    showForm: false
  }

  showForm = () => {
    this.setState({showForm: !this.state.showForm})
  }

  onSubmit = (newPoem) => {
    const options = {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "accept": "application/json"
      },
      body: JSON.stringify(newPoem)
    }
    fetch('http://localhost:6001/poems', options)
    .then(resp => resp.json())
    .then(data => {
      this.setState({poemList: [...this.state.poemList, data]})
    })
  }

  componentDidMount() {
    fetch('http://localhost:6001/poems')
    .then(resp => resp.json())
    .then(data => this.setState({poemList: data}))
  }

  render() {
    return (
      <div className="app">
        <div className="sidebar">
          <button onClick={this.showForm} >Show/hide new poem form</button>
          {this.state.showForm && <NewPoemForm onSubmit={this.onSubmit} />}
        </div>
        <PoemsContainer poemList={this.state.poemList}/>
      </div>
    );
  }
}

export default App;

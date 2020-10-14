import React from "react";
import "./App.css";
import PoemsContainer from "./PoemsContainer";
import NewPoemForm from "./NewPoemForm";

class App extends React.Component {
  state = {
    poems:[],
    showForm: false,
  }
  //Core Deliverable 1
  componentDidMount(){
    fetch('http://localhost:6001/poems')
    .then(resp => resp.json())
    .then(dbPoems => this.setState({poems: dbPoems}));
  }
  
  //Core Deliverable 2
  toggleShowForm = () => {
    let show = this.state.showForm;
    this.setState({showForm: !show});
  }

  //Core Deliverable 3
  createNewPoem = poem => {
    let options = {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'accepts': 'application/json'
      },
      body: JSON.stringify(poem)
    }
    fetch('http://localhost:6001/poems', options)
    .then(resp => resp.json())
    .then(newPoem => {
      this.appendNewPoem(newPoem);
    })
  }

  appendNewPoem = newPoem => {
    let updatedPoems = [...this.state.poems, newPoem];
    this.setState({
      poems: updatedPoems,
    })
  }

  //Core Deliverable 4 - is in Poem component since the status read or unread doesn't have to persist...


  render() {
    return (
      <div className="app">
        <div className="sidebar">
          <button onClick={this.toggleShowForm}>Show/hide new poem form</button>
          {this.state.showForm && <NewPoemForm createPoem={this.createNewPoem}/>}
        </div>
        <PoemsContainer toRenderPoems={this.state.poems}/>
      </div>
    );
  }
}

export default App;

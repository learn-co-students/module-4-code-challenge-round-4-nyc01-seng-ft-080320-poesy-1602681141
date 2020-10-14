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

  //Advanced Deliverable 1
  makeFavorite = poemId => {
    let poemIdx = this.state.poems.findIndex(poem => poem.id === poemId);
    let updatedPoems = [...this.state.poems];
    updatedPoems[poemIdx].favorite = true;
    this.setState({
      poems: updatedPoems,
    });
  }

  removeFavorite = poemId => {
    let poemIdx = this.state.poems.findIndex(poem => poem.id === poemId);
    let updatedPoems = [...this.state.poems];
    updatedPoems[poemIdx].favorite = false;
    this.setState({
      poems: updatedPoems,
    });
  }

  //Advanced Deliverable 2
  deletePoem = poemId => {
    let options = {
      method: 'DELETE'
    }
    console.log("attempting delete of poemID:",poemId);
    fetch('http://localhost:6001/poems/'+poemId, options)
    .then(resp => resp.json())
    .then(json => {
      let poemIdx = this.state.poems.findIndex(poem => poem.id === poemId);
      let updatedPoems = [...this.state.poems];
      updatedPoems.splice(poemIdx,1);
      console.log(updatedPoems);
      this.setState({
        poems: updatedPoems,
      })
    })
    console.log("after deleting this is my state", this.state.poems);
  }

  render() {
    return (
      <div className="app">
        <div className="sidebar">
          <button onClick={this.toggleShowForm}>Show/hide new poem form</button>
          {this.state.showForm && <NewPoemForm createPoem={this.createNewPoem}/>}
        </div>
        <div>
          <h1>Poems Index</h1>
          <PoemsContainer toRenderPoems={this.state.poems.filter(p => !p.favorite)} deletePoem={this.deletePoem} alterFavorite={this.makeFavorite}/>
        </div>
        <div style={{borderLeft: "6px solid #000"}}>

        </div>
        <div>
          <h1>Favorites</h1>
          <PoemsContainer toRenderPoems={this.state.poems.filter(p => p.favorite)} alterFavorite={this.removeFavorite}/>
        </div>
      </div>
    );
  }
}

export default App;

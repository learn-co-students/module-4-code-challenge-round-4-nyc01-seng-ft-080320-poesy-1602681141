import React from "react";
import "./App.css";
import PoemsContainer from "./PoemsContainer";
import FavoriteContainer from "./FavoriteContainer";
import NewPoemForm from "./NewPoemForm";

class App extends React.Component {
  state = {
    poemList: [],
    favoriteList: [],
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

  addFavorite = (poemObj, boolean) => {
    if(boolean){
      this.setState({favoriteList: this.state.favoriteList.filter(poem => poem.title !== poemObj.title)})
    }else{
      this.setState({favoriteList: [...this.state.favoriteList, poemObj]})
    }
  }

  deletePoem = (poemObj) => {
    const options = {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
        "accept": "application/json"
      }
    }
    fetch(`http://localhost:6001/poems/${poemObj.id}`, options)
    .then(resp => resp.json())
    .then(data => {
      this.setState({poemList: this.state.poemList.filter(poem => poem.id !== poemObj.id)})
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
          <h3 style={{textAlign: 'center'}}>Favorite List</h3>
          <FavoriteContainer poemList={this.state.favoriteList}/>
        </div>
        <PoemsContainer poemList={this.state.poemList} addFavorite={this.addFavorite} deletePoem={this.deletePoem}/>
      </div>
    );
  }
}

export default App;

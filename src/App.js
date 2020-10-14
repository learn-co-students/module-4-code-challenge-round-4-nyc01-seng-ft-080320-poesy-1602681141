import React from "react";
import "./App.css";
import PoemsContainer from "./PoemsContainer";
import NewPoemForm from "./NewPoemForm";

class App extends React.Component {

  state = {
    formShown: true,
    poemsApi: []
  }

  componentDidMount = () => {
    fetch("http://localhost:6001/poems")
    .then(response => response.json())
    .then(poems => this.setState({ poemsApi: poems }))
  }

  addPoem = (poemObj) => {
    console.log(poemObj)
    const options = {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(poemObj)
    }
    fetch("http://localhost:6001/poems", options)
    .then(response => response.json())
    .then(poem => {
      const newArray = [...this.state.poemsApi]
      console.log(newArray)
      newArray.push(poem)
      console.log(newArray)
      this.setState({poemsApi: newArray})
    })
  }


  toggleForm = () => {
    if (this.state.formShown === true){
      this.setState({formShown: false})
    } else {
      this.setState({formShown: true})
    }
  }


  render() {
    let form;
    if (this.state.formShown){
      form = <NewPoemForm addPoem={this.addPoem}/>
    } else {
      form = null
    }
    
    return (
      <div className="app">
        <div className="sidebar">
          <button onClick={this.toggleForm}>Show/hide new poem form</button>
          {form}
        </div>
        <PoemsContainer poemsApi={this.state.poemsApi}/>
      </div>
    );
  }
}

export default App;

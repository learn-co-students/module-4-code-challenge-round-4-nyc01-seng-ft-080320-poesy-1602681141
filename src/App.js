import React from "react";
import "./App.css";
import PoemsContainer from "./PoemsContainer";
import NewPoemForm from "./NewPoemForm";

const APIURL = "http://localhost:6001/poems/"

class App extends React.Component {
  constructor(props) {
    super(props)
  
    this.state = {
       api:[],
       viewForm: false
    }
  }
  

  handleShowForm = (event) => {
    this.setState({viewForm: !this.state.viewForm})
  }
  
  createPoem = (poemContent) => {
    const options = {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(poemContent)
    }

    fetch(APIURL,options)
      .then(res => res.json())
      .then(update => this.updateApi(update))
  }

  deletePoem = (poemId) => {
    const options = {
      method: 'DELETE',
    }

    fetch(APIURL+poemId,options)
      .then(res => res.json())
      .then(update => this.updateApi(update))
  }
  

  updateApi = (update) => {
    let currentApi = [...this.state.api]

    if(update === {})return console.log("deleted")

    currentApi.push(update)
    this.setState({api: currentApi})
  }

  render() {
    
    return (
      <div className="app">
        <div className="sidebar">
          <button onClick={this.handleShowForm}>Show/hide new poem form</button>
          {this.state.viewForm && <NewPoemForm createPoem={this.createPoem} />}
        </div>
        <PoemsContainer api={this.state.api} deletePoem={this.deletePoem}/>
      </div>
    );
  }

  componentDidMount() {
    fetch(APIURL)
      .then(res => res.json())
      .then(api => this.setState({api}))
  }
  
  
  


}

export default App;

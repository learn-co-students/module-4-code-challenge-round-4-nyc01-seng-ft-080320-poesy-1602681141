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
    // console.log("clicking")
    this.setState((prevState) => ({ clicked: !prevState.clicked }))
  }

  submitHandler = (poemObj) => {
    // console.log("Submit Working", )
    
    let options = {
                method: 'POST',
                headers: {
                    "content-type": "application/json",
                    "accept": "application/json"
                },
                body: JSON.stringify(poemObj)
            }
    
            fetch("http://localhost:6001/poems", options)
            .then(response => response.json())
            .then(newPoem => {
              let newArray = [...this.state.api, newPoem]
              this.setState({ api: newArray })
            })
  }

  render() {
    return (
      <div className="app">
        <div className="sidebar">
          <button onClick={this.clickHandler}>Show/hide new poem form</button>
          {this.state.clicked ? <NewPoemForm submitHandler={this.submitHandler}/> : null }
        </div>
        <PoemsContainer poems={this.state.api} />
      </div>
    );
  }
}

export default App;



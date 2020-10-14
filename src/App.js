import React from "react";
import "./App.css";
import PoemsContainer from "./PoemsContainer";
import NewPoemForm from "./NewPoemForm";

class App extends React.Component {
    state ={
        api: [],
        showForm: false
    }

    componentDidMount = () => {
        fetch('http://localhost:3000/poems')
        .then(resp => resp.json())
        .then(poems => {
            this.setState({api: poems})
        })
    }

    showFormHandler = () => {
        this.setState(prevState => ({showForm: !prevState.showForm}))
    }

    newPoemSubmitHandler = poemObj => {
        //create new obj and update api in state
         const options = {
             method: "POST",
             headers: {
                 "Content-Type": "application/json",
                 "Accept": "application/json"
             },
             body: JSON.stringify(poemObj)
         }
         fetch('http://localhost:3000/poems', options)
         .then(resp => resp.json())
         .then(newPoem => {
             const newArr = [...this.state.api, newPoem]
             this.setState({api: newArr})
         })
    }
    deletePoemHandler = poemId => {
        const options = {
            method: "DELETE"
        }
        fetch(`http://localhost:3000/poems/${poemId}`, options)
        .then(resp => resp.json())
        .then(() => {
            const newArr = [...this.state.api]
            const filtered = newArr.filter(poem => poem.id !== poemId)
            this.setState({api: filtered})
        })
       //send delete request
    }
  render() {
      console.log(this.state.showForm)
    return (
      <div className="app">
        <div className="sidebar">
          <button onClick={this.showFormHandler}>Show/hide new poem form</button>
          {this.state.showForm? <NewPoemForm submitHandler={this.newPoemSubmitHandler}/> : null}
          {/* {false && <NewPoemForm />} */}
        </div>
        <PoemsContainer deleteHandler={this.deletePoemHandler}poems={this.state.api}/>
      </div>
    );
  }
}

export default App;

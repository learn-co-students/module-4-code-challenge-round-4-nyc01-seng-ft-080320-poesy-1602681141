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
  render() {
      console.log(this.state.showForm)
    return (
      <div className="app">
        <div className="sidebar">
          <button onClick={this.showFormHandler}>Show/hide new poem form</button>
          {this.state.showForm? <NewPoemForm /> : null}
          {/* {false && <NewPoemForm />} */}
        </div>
        <PoemsContainer poems={this.state.api}/>
      </div>
    );
  }
}

export default App;

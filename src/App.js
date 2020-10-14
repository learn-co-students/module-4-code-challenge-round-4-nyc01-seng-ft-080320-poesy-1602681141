import React from "react";
import "./App.css";
import PoemsContainer from "./PoemsContainer";
import NewPoemForm from "./NewPoemForm";

class App extends React.Component {

  state = {
    formShown: true
  }


  toggleForm = () => {
    if (this.state.formShown === true){
      this.setState({formShown: false})
    } else {
      this.setState({formShown: true})
    }
    console.log(this.state.formShown)
  }


  render() {
    let form;
    if (this.state.formShown){
      form = <NewPoemForm />
    } else {
      form = null
    }
    
    return (
      <div className="app">
        <div className="sidebar">
          <button onClick={this.toggleForm}>Show/hide new poem form</button>
          {form}
        </div>
        <PoemsContainer />
      </div>
    );
  }
}

export default App;

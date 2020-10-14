import React from "react";
import "./App.css";
import PoemsContainer from "./PoemsContainer";
import NewPoemForm from "./NewPoemForm";

class App extends React.Component {
  state = {
    showForm: false
  }

  showForm = (e) => {
    this.setState({showForm: !this.state.showForm})
  }

  render() {
    return (
      <div className="app">
        <div className="sidebar">
          <button onClick={this.showForm} >Show/hide new poem form</button>
          {this.state.showForm && <NewPoemForm />}
        </div>
        <PoemsContainer />
      </div>
    );
  }
}

export default App;

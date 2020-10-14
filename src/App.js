import React from "react";
import "./App.css";
import PoemsContainer from "./PoemsContainer";
import NewPoemForm from "./NewPoemForm";


class App extends React.Component {

  state = {
    isHidden: true 
  }
  
  toggleHidden() {
    this.setState({
      isHidden: !this.state.isHidden
    })
  }
  

  render() {
    return (
      <div className="app">
        <div className="sidebar">
          <button onClick={this.toggleHidden}>
            Show/hide new poem form
            </button>
          {!this.state.isHidden && <NewPoemForm />}
        </div>
        <PoemsContainer />
      </div>
    );
  }
}

export default App;

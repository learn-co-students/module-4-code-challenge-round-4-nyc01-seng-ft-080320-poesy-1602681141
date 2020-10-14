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


  render() {
    return (
      <div className="app">
        <div className="sidebar">
          <button onClick={this.toggleShowForm}>Show/hide new poem form</button>
          {this.state.showForm && <NewPoemForm />}
        </div>
        <PoemsContainer toRenderPoems={this.state.poems}/>
      </div>
    );
  }
}

export default App;

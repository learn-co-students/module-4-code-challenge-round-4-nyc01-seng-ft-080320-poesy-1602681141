import React from "react";
import "./App.css";
import PoemsContainer from "./PoemsContainer";
import NewPoemForm from "./NewPoemForm";
import ToggleBox from "./ToggleBox"

class App extends React.Component {

  state={
    api:[],
    newApi:[],
    title: "Mark as read"
  }



  componentDidMount=()=>{
    fetch('http://localhost:6001/poems')
    .then(res=>res.json())
    .then(data=>this.setState(()=>({api:data})))
  }

  submitHandler = (poem) => {
    console.log(poem)
    let newArray = [poem, ...this.state.newApi]
    this.setState({newApit: newArray})
  }

  
  render() {

 
    return (
      <div className="app">
        <div className="sidebar">
          <ToggleBox title="Show Form">
            {<NewPoemForm submitHandler={this.submitHandler}/>}
			    </ToggleBox>
        </div>
        <PoemsContainer poems={this.state.api} />
      </div>
    );
  }
}

export default App;

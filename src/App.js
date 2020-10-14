import React from "react";
import "./App.css";
import PoemsContainer from "./PoemsContainer";
import NewPoemForm from "./NewPoemForm";

class App extends React.Component {

  state={
    poems:[]

  }

  componentDidMount(){
    let API = "http://localhost:6001/poems/"
    fetch(API)
    .then(res=>res.json())
    .then(data=>this.addToProps(data))
  }

  clickHandler =(objId) =>{
  console.log('in click Handler')
   let poem= this.state.poems.find(obj=> obj.id===objId)
   poem.read = true
   this.setState({...this.state.poems, poem})

  }

 addToProps = (data) =>{
   let poems = data.map(poem =>{return{...poem, read:false}})
   this.setState({poems:poems})
 }
  render() {
    console.log(this.state.poems)
    return (
      <div className="app">
        <div className="sidebar">
          <button>Show/hide new poem form</button>
          {false && <NewPoemForm />}
        </div>
        <PoemsContainer poems={this.state.poems} clickHandler={this.clickHandler}/>
      </div>
    );
  }
}

export default App;

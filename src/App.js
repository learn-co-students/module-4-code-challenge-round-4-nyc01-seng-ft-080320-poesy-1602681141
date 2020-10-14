import React from "react";
import "./App.css";
import PoemsContainer from "./PoemsContainer";
import NewPoemForm from "./NewPoemForm";

class App extends React.Component {

  state={
    poems:[],
    formOpen: false,

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

  openForm=()=>{
    if(this.state.formOpen===false){
    this.setState({formOpen:true})
    }else{ 
      this.setState({formOpen:false})
    }
  }


 addToProps = (data) =>{
   let poems = data.map(poem =>{return{...poem, read:false}})
   this.setState({poems:poems})
 }

 postIt=(poem)=>{



   let API= "http://localhost:6001/poems/"
   console.log('im here,', poem)

   let options={
     method:'POST',
     headers: {
       'content-type':'application/json',
       'accepts': 'application/json'
     },
     body: JSON.stringify(poem)
   }



   fetch(API, options)
   .then(res=>res.json())
   .then(res=>this.addNewPoemToState(res))

   
 }

 addNewPoemToState = (poem) =>{
    let newArray = [...this.state.poems, poem]
    this.setState({poems:newArray})
 }

  render() {
    console.log(this.state.poems)
    return (
      <div className="app">
        <div className="sidebar">
          <button onClick={this.openForm}>Show/hide new poem form</button>
          {this.state.formOpen? <NewPoemForm postIt={this.postIt}/> : null}
        </div>
        <PoemsContainer poems={this.state.poems} clickHandler={this.clickHandler}/>
      </div>
    );
  }
}

export default App;

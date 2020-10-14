import React from "react";
import "./App.css";
import PoemsContainer from "./PoemsContainer";
import NewPoemForm from "./NewPoemForm";
import FavoritesContainer from "./FavoritesContainer"

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

  clickHandler =(objId, targetName) =>{
  console.log('in click Handler')
  let poem= this.state.poems.find(obj=> obj.id===objId)
    console.log(targetName)

        if(targetName = "read_button"){
          poem.read = !poem.read
          this.setState({...this.state.poems, poem})
        } if(targetName = "read_button"){
          console.log('favorite')
          poem.favorite = !poem.favorite
          this.setState({...this.state.poems, poem})
        }
  }

  openForm=()=>{
    if(this.state.formOpen===false){
    this.setState({formOpen:true})
    }else{ 
      this.setState({formOpen:false})
    }
  }


 addToProps = (data) =>{
   let poems = data.map(poem =>{return{...poem, read:false, favorite:false}})
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

 createFavorites = () =>{
  return this.state.poems.filter(poem => poem.favorite===true)
 }

  render() {
    let favoriteArray = this.createFavorites()
    console.log(favoriteArray.length)

    return (
      <div className="app">
        <div className="sidebar">
          <button onClick={this.openForm}>Show/hide new poem form</button>
          {this.state.formOpen? <NewPoemForm postIt={this.postIt}/> : null}
        </div>
        <PoemsContainer poems={this.state.poems} clickHandler={this.clickHandler}/>
        {favoriteArray.length>0? <FavoritesContainer poems={favoriteArray}/>:null}
      </div>
    );
  }
}

export default App;

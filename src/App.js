import React from "react";
import "./App.css";
import PoemsContainer from "./PoemsContainer";
import SideBar from "./SideBar";

class App extends React.Component {
    state = {
        poemsList: [],
        favPoems: [],
        newPoem: ''
    }

    componentDidMount() {
        fetch('http://localhost:6001/poems')
            .then(resp => resp.json())
            .then(poemsApi => {
                this.setState( { poemsList: poemsApi})
            })
    }

    addPoem = (poemObj) => {
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accepts: "application/json"
            },
            body: JSON.stringify(poemObj)
        }
        fetch('http://localhost:6001/poems', options)
            .then(resp => resp.json())
            .then(apiPoem => {
                this.setState(prevState => {
                    return { poemsList: [apiPoem, ...prevState.poemsList]}
                })
            })
    }

    deletePoem = (poemId) => {
        // decided to do the deletion optimistically 
        const newArray = [...this.state.poemsList]
        const index = newArray.findIndex(poem => poem.id === poemId)
        newArray.splice(index, 1)
        this.setState( { poemsList: newArray })

        fetch(`http://localhost:6001/poems/${poemId}`, {method: "DELETE"})
            .then(resp => resp.json())
            .then(poemObj => {
                console.log('successfully deleted poem')
            })
    }

    favoriteHandler = (poemObj) => {
        if(this.state.favPoems.some(poem => poem.id === poemObj.id)) {
            const newArray = [...this.state.favPoems]
            const index = newArray.findIndex(poem => poem.id === poemObj.id)
            newArray.splice(index, 1)
            this.setState( { favPoems: newArray })
        } else {
            this.setState(prevState => {
                return { favPoems: [...prevState.favPoems, poemObj]}
            })
        }
    }

    render() {
        return (
        <div className="app">
            <SideBar addPoemHandler={this.addPoem} favPoems={this.state.favPoems}/>
            <PoemsContainer poemsList={this.state.poemsList} 
                deleteHandler={this.deletePoem}
                favoriteHandler={this.favoriteHandler}/>
        </div>
        );
    }
}

export default App;

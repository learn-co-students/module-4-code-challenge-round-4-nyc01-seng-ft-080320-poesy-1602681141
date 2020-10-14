import React from "react";
import "./App.css";
import PoemsContainer from "./PoemsContainer";
import NewPoemForm from "./NewPoemForm";

class App extends React.Component {
    state = {
        poemsList: [],
        formButtonClicked: false,
        newPoem: ''
    }

    componentDidMount() {
        fetch('http://localhost:6001/poems')
            .then(resp => resp.json())
            .then(poemsApi => {
                this.setState( { poemsList: poemsApi})
            })
    }

    formButtonClickHandler = () => {
        this.setState(prevState => { 
            return { formButtonClicked: !prevState.formButtonClicked } 
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

    render() {
        return (
        <div className="app">
            <div className="sidebar">
            <button onClick={this.formButtonClickHandler}>Show/hide new poem form</button>
            {this.state.formButtonClicked ? <NewPoemForm addPoemHandler={this.addPoem}/> : null}
            </div>
            <PoemsContainer poemsList={this.state.poemsList}/>
        </div>
        );
    }
}

export default App;

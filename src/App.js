import React from "react";
import "./App.css";
import PoemsContainer from "./PoemsContainer";
import NewPoemForm from "./NewPoemForm";

class App extends React.Component {
    state = {
        formButtonClicked: false
    }

    formButtonClickHandler = () => {
        this.setState(prevState => { 
            return { formButtonClicked: !prevState.formButtonClicked } 
        })
    }

    render() {
        return (
        <div className="app">
            <div className="sidebar">
            <button onClick={this.formButtonClickHandler}>Show/hide new poem form</button>
            {this.state.formButtonClicked ? <NewPoemForm /> : null}
            </div>
            <PoemsContainer />
        </div>
        );
    }
}

export default App;

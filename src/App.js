import React from "react";
import "./App.css";
import PoemsContainer from "./PoemsContainer";
import NewPoemForm from "./NewPoemForm";

const API = 'http://localhost:6001/poems/'

class App extends React.Component {

  state = {
    api: [],
    formClicked: false
  }

  componentDidMount() {
    fetch(API).then(resp => resp.json()).then(poems =>
      this.setState({
        api: poems
      })
    )
  }

  formHandle = () => {
    this.setState(prevState => ({
      formClicked: !prevState.formClicked
    }))
  }

  postPoem = form => {
    fetch(API, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        accepts: "application/json"
      },
      body: JSON.stringify(form)
    }).then(resp => resp.json()).then(poem => 
      this.setState(prevState => ({
      api: [...prevState.api, poem]
    })))
  }


  render() {

    return (
      <div className="app">
        <div className="sidebar">
          <button onClick={this.formHandle}>Show/hide new poem form</button>
          {this.state.formClicked ? <NewPoemForm post={this.postPoem} /> : null}
        </div>
        <PoemsContainer poems={this.state.api} />
      </div>
    );
  }
}

export default App;

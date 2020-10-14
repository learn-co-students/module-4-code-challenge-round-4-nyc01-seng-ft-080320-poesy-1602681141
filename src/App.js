import React from "react";
import "./App.css";
import PoemsContainer from "./PoemsContainer";
import NewPoemForm from "./NewPoemForm";

class App extends React.Component {

  state = {
    resp: [],
    form: {
      visible: false,
    }
  }

  submitHandler = e => {
    e.preventDefault()
    e.persist()

    let newPoemObj = {
      title: e.target.title.value,
      author: e.target.author.value,
      content: e.target.content.value
    }
    //console.log('poemObj', newPoemObj)

    fetch('http://localhost:3000/poems', {
      method: 'POST',
      headers: {
        accept: 'application/json',
        'content-type': 'application/json'
      },
      body: JSON.stringify(newPoemObj)
    })
    .then( r => r.json())
    .then (addedPoem => {
      //prepend the list
      this.setState(ps => ({ resp: [...ps.resp, addedPoem]}))

    })
  }

  toggleForm = () => {
    this.setState(ps => ({
      resp: [...ps.resp],
      form: {
        ...ps.form,
        visible: !ps.form.visible
      }
    }))
  }

  componentDidMount() {
    fetch('http://localhost:3000/poems')
    .then(r => r.json())
    .then(poems => this.setState({ resp: poems}))
  }

  render() {
    console.log('current render state', this.state)
    return (
      <div className="app">
        <div className="sidebar">
          <button
            onClick={this.toggleForm}
          >Show/hide new poem form</button>
          {this.state.form.visible && <NewPoemForm submitHandler ={this.submitHandler} />}
        </div>
        <PoemsContainer
          poems = {this.state.resp}
        />
      </div>
    );
  }
}

export default App;

import React from "react";
import Poem from "./Poem";

class PoemsContainer extends React.Component {
    state = {
        poemsList: []
    }

    componentDidMount() {
        fetch('http://localhost:6001/poems')
            .then(resp => resp.json())
            .then(poemsApi => {
                this.setState( { poemsList: poemsApi})
            })
    }

    renderPoems = () => {
        return this.state.poemsList.map((poemObj, indx) => <Poem key={indx} poem={poemObj}/>)
    }

    render() {
        console.log(this.state.poemsList)
        return (
        <div className="poems-container">
            {this.renderPoems()}
        </div>
        );
    }
}

export default PoemsContainer;

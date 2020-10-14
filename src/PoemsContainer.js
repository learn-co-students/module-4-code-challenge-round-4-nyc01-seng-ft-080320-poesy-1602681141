import React from "react";
import Poem from "./Poem";

class PoemsContainer extends React.Component {
    state = {
        readPoems: []
    }

    readHandler = (poemObj) => {
        if(this.state.readPoems.some(poem => poem.id === poemObj.id)){
            this.setState(prevState => {
                const newArray = [...this.state.readPoems]
                const index = newArray.findIndex(poem => poem.id === poemObj.id)
                newArray.splice(index, 1)
                return {readPoems: newArray}
            })
        } else {
            this.setState(prevState => { 
                return { readPoems: [...prevState.readPoems, poemObj] }
            })
        }
    }


    renderPoems = () => {
    return this.props.poemsList.map((poemObj, indx) => {
            return <Poem key={indx} 
                poem={poemObj} 
                read={this.state.readPoems.some(poem => poem.id === poemObj.id) ? true : false}
                readHandler={this.readHandler}
                deleteHandler={this.props.deleteHandler}
                favoriteHandler={this.props.favoriteHandler}/>
        })
    }

    render() {
        return (
            <div className="poems-container">
                {this.renderPoems()}
            </div>
        );
    }
}

export default PoemsContainer;

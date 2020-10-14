import React from "react";
import Poem from "./Poem";

class PoemsContainer extends React.Component {
    state = {
        
    }

    renderPoems = () => {
        return this.props.poemsList.map((poemObj, indx) => <Poem key={indx} poem={poemObj}/>)
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

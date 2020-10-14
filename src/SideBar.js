import React from 'react';
import NewPoemForm from "./NewPoemForm";
import FavPoemsContainer from './FavPoemsContainer';

class SideBar extends React.Component {
    state = {
        formButtonClicked: false,
    }


    formButtonClickHandler = () => {
        this.setState(prevState => { 
            return { formButtonClicked: !prevState.formButtonClicked } 
        })
    }

    render() {
        return <div className="sidebar">
            <button onClick={this.formButtonClickHandler}>Show/hide new poem form</button>
            {this.state.formButtonClicked ? <NewPoemForm addPoemHandler={this.props.addPoemHandler}/> : null}
            {this.props.favPoems.length > 0 ? <FavPoemsContainer favPoems={this.props.favPoems}/> :  null}
        </div>
    }
}

export default SideBar
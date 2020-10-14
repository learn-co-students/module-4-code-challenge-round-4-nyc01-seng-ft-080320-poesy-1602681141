import React from 'react';
import './App.css';
import PoemsContainer from './PoemsContainer';
import NewPoemForm from './NewPoemForm';
import FavoritesContainer from './FavoritesContainer';

class App extends React.Component {
	state = {
		api: [],
		showForm: false,
		favorites: []
	};

	componentDidMount = () => {
		fetch('http://localhost:3000/poems').then((resp) => resp.json()).then((poems) => {
			this.setState({ api: poems });
		});
	};

	showFormHandler = () => {
		this.setState((prevState) => ({ showForm: !prevState.showForm }));
	};

	newPoemSubmitHandler = (poemObj) => {
		//create new obj and update api in state
		const options = {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json'
			},
			body: JSON.stringify(poemObj)
		};
		fetch('http://localhost:3000/poems', options).then((resp) => resp.json()).then((newPoem) => {
			const newArr = [ ...this.state.api, newPoem ];
			this.setState({ api: newArr });
		});
	};
	deletePoemHandler = (poemId) => {
		const options = {
			method: 'DELETE'
		};
		fetch(`http://localhost:3000/poems/${poemId}`, options).then((resp) => resp.json()).then(() => {
			const newArr = [ ...this.state.api ];
			const newFaves = [ ...this.state.favorites ];
			const filteredFaves = newFaves.filter((poem) => poem.id !== poemId);
			const filteredApi = newArr.filter((poem) => poem.id !== poemId);
			this.setState({ api: filteredApi, favorites: filteredFaves });
		});
		//send delete request
	};

	addToFavorites = (poemObj) => {
		const found = [ ...this.state.favorites ].find((poem) => poem.id === poemObj.id);
		if (found === undefined) {
			const newArr = [ ...this.state.favorites, poemObj ];
			this.setState({ favorites: newArr });
		}
    };
    
    removeFromFavorites = poemObj => {
        const newFaves = [...this.state.favorites]
        const filtered = newFaves.filter(poem => poem.id !== poemObj.id)
        this.setState({favorites: filtered})
    }

	render() {
		console.log(this.state.favorites);
		return (
			<div className="app">
				<div className="sidebar">
					<button onClick={this.showFormHandler}>Show/hide new poem form</button>
					{this.state.showForm ? <NewPoemForm submitHandler={this.newPoemSubmitHandler} /> : null}
					{/* {false && <NewPoemForm />} */}
				</div>
				<PoemsContainer
					removeFavoriteHandler={this.removeFromFavorites}
					favoriteHandler={this.addToFavorites}
					deleteHandler={this.deletePoemHandler}
					poems={this.state.api}
				/>
				<FavoritesContainer poems={this.state.favorites} />
			</div>
		);
	}
}

export default App;

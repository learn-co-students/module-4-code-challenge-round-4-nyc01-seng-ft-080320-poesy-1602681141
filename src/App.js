import React, { useState, useEffect } from "react";
import "./App.css";
import PoemsContainer from "./PoemsContainer";
import NewPoemForm from "./NewPoemForm";
import FavoritesContainer from './FavoritesContainer';

const App = () => {
  const [showForm, setShowForm] = useState(false);
  const [poems, setPoems] = useState([]);

  /* Storing favorites as state rather than in the db causes single source of truth issues, but I didn't want to add it to the database as an attribute because
  this is the database we were provided and sometimes you just gotta work with the format they give you. That's my excuse anyway.

  I would love to know if there's a way to preserve SSoT here by customizing setFavorites to depend on the poems state somehow.
  */
  const [favorites, setFavorites] = useState([]);

  const headers = {
    "Content-Type": "application/json",
    "Accepts": "application/json"
  };

  // fetches all poems. only runs once on mount thanks to empty array callback.
  useEffect(() => {
    fetch('http://localhost:6001/poems')
    .then(resp => resp.json())
    .then(jsonPoems => setPoems(jsonPoems))
  }, []);

  // so we know whether to show the new poem form
  const handleClick = () => {
    setShowForm(!showForm);
  };
  
  const toggleFavorite = poem => {
    if (!favorites.find(favorite => { return favorite === poem })) {
      setFavorites([...favorites, poem]);
    } else {
      const updatedFavorites = favorites.filter(favorite => {
        return favorite !== poem;
      })
      setFavorites(updatedFavorites);
    }
  }

  const appHandleSubmit = formData => {
    fetch('http://localhost:6001/poems', {
      method: "POST",
      headers: headers, 
      body: JSON.stringify(formData)
    })
      .then(resp => resp.json())
      .then(newPoem => {
        setPoems([...poems, newPoem]);
      });
  }

  const appHandleDelete = poem => {
    fetch(`http://localhost:6001/poems/${poem.id}`, {
      method: "DELETE",
      headers: headers
    })
      .then(resp => resp.json())
      .then(() => {
        const updatedPoems = poems.filter(oldPoem => {
          return oldPoem !== poem
        })
        const updatedFavorites = favorites.filter(favorite => {
          return favorite !== poem
        })
        setPoems(updatedPoems);
        setFavorites(updatedFavorites);
      })
  }

  return (
    <div className="app">
      <div className="sidebar">
        <button name="showForm" onClick={handleClick}>Show/hide new poem form</button>
        {showForm && <NewPoemForm appHandleSubmit={appHandleSubmit} />}
      </div>
      <PoemsContainer poems={poems} favorites={favorites} toggleFavorite={toggleFavorite} appHandleDelete={appHandleDelete} />
      <FavoritesContainer favorites={favorites} />
    </div>
  );
}

export default App;

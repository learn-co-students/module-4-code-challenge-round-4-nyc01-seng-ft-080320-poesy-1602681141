import React, { useState } from "react";

const Poem = props => {
  // could have also made read a prop in app, like favorites, but there's no need for the parent components to have access to that information
  const [read, setRead] = useState(false);

  const handleClick = event => {
    event.persist();
    if (event.target.name === 'read') {
      setRead(!read);
    } else if (event.target.name === 'favorite') {
      props.toggleFavorite(props.poem);
    } else {
      props.appHandleDelete(props.poem);
    }
  }

  return (
    <div>
      <h3>{props.poem.title}</h3>
      <p>{props.poem.content}</p>
      <p>
        <strong>- {props.poem.author}</strong>
      </p>
      {props.parentContainer === 'PoemsContainer' ? 
      <>
        <button name="read" onClick={handleClick}>{read ? 'Mark as unread' : 'Mark as read'}</button>
        <button name="favorite" onClick={handleClick}>{props.favorites.find(favorite => {return favorite === props.poem}) ? 'Remove from favorites' : 'Add to favorites'}</button>
        <button name="delete" onClick={handleClick}>Delete Poem</button>
      </>
      :
      null}
    </div>
  );
}

export default Poem;

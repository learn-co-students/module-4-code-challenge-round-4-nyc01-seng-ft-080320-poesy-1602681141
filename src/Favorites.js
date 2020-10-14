import React from 'react'

class Favorites extends React.Component {

     render(){
          return(
          <h3>{this.props.poem.title}</h3>
          <p>{this.props.poem.content}</p>
          <p>
            <strong>- By {this.props.poem.author}</strong>
          </p>
          <button onClick={this.clickHandler}>{this.state.buttonText}</button>
          <button onClick={this.faveClick}>Favorite</button>
        </div>
      );

          return
     }



}
export default Favorites
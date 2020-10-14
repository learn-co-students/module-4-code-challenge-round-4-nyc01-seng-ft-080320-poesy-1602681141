import React from 'react'
import Favorite from './Favorite'

function Favorites(props){

    let poemMe = () => {
        return props.poems.map(poem => <Favorite theyHateMe={props.theyHateMe} key={poem.id} poem={poem} />)
    }
    let havePoems = () =>{
        
            if (props.poems.length > 0) {
                return (
                    <ul>
                        {poemMe()}
                    </ul>)
            }else{
                return <h3>None Yet :(</h3>
            }
        }
    
    return(
        <div>
            <h2 style={{textAlign: "center"}}>Favorites</h2>
            {havePoems()}
        </div>
    )

}

export default Favorites
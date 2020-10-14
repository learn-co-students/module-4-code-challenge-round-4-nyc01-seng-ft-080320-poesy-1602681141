import React from 'react'
import { render } from 'react-dom'
import Poem from './Poem'

const FavoritesContainer = props => {
    const renderFaves = () => {
        return props.poems.map(poem => {
            return <Poem key={poem.id} poem={poem} favorite="fave"/>
        })
    }
    return(
        <div className="poems-container">
            {renderFaves()}
        </div>
    )
}

export default FavoritesContainer
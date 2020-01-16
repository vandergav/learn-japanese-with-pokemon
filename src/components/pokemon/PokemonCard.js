import React, { useState } from 'react'
import { Link } from 'react-router-dom';

export default function PokemonCard({ imageUrl }) {

    const pokemonIndex = imageUrl.split('/')[imageUrl.split('/').length - 2]
    // const imgURL = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${pokemonIndex}.png`
    const imgURL = `https://pokeres.bastionbot.org/images/pokemon/${pokemonIndex}.png`

    return (
        <div className="col-lg-4">
            <Link to={`/${pokemonIndex}`}>
                <div className="card">
                    <div className="card-header">
                        <h3>{pokemonIndex}</h3>
                        <img src={imgURL} alt="" width="200" height="200" />
                    </div>
                </div>
            </Link>
        </div>
    )
}

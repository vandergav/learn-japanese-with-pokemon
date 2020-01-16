import React from 'react'

import PokemonCard from './components/pokemon/PokemonCard';


export default function PokemonList({ pokemon, imageUrl }) {

    return (
        <div className="row">
            <div className="col-3 list">
                <ul>
                    {pokemon.map(p => (
                        <li className="list-item" key={p}>{p}</li>
                    ))
                    }
                </ul>
            </div>
            <div className="col-8">
                <div className="row">
                    {imageUrl.map(i => <PokemonCard key={i} imageUrl={i} />)}
                </div>
            </div>
        </div>
    )
}

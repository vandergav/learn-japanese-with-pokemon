import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function Pokemon({ match }) {
    const [pokemonIndex, setPokemonIndex] = useState([""])
    const [name, setName] = useState([""])
    const [species, setSpecies] = useState([""])
    const [namae, setNamae] = useState([""])
    const [kanjiflavor, setKanjiflavor] = useState([""])
    const [engflavor, setEngflavor] = useState([""])
    const [imgURL, setimgURL] = useState([""])

    useEffect(() => {
        getData();
    }, [])

    const getData = async () => {
        const { pokemonIndex } = match.params

        const pokemonUrl = `https://pokeapi.co/api/v2/pokemon/${pokemonIndex}/`;
        const pokemonSpeciesUrl = `https://pokeapi.co/api/v2/pokemon-species/${pokemonIndex}/`;
        const imgURL = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonIndex}.png`
        const pokemonRes = await axios.get(pokemonUrl)
        const pokemonRes2 = await axios.get(pokemonSpeciesUrl)
        console.log(pokemonRes)
        console.log(pokemonRes2)
        setNamae(pokemonRes2.data.names[1].name)
        setimgURL(imgURL)
        // setKanjiflavor(pokemonRes2.data.flavor_text_entries[0].flavor_text)
        setKanjiflavor(pokemonRes2.data.flavor_text_entries[pokemonRes2.data.flavor_text_entries.findIndex((todo, index) => { return todo.language.name === "ja" })].flavor_text)
        setEngflavor(pokemonRes2.data.flavor_text_entries[pokemonRes2.data.flavor_text_entries.findIndex((todo, index) => { return todo.language.name === "en" })].flavor_text)
    }


    return (
        <div className="factfile">
            <img src={imgURL} alt="" width="200" height="200" />
            <h1 style={{ color: 'blue' }}>{namae}</h1>
            <h2 style={{ backgroundColor: 'AliceBlue' }}>{engflavor}</h2>
            <h2 style={{ backgroundColor: 'Snow' }}>{kanjiflavor}</h2>
        </div>
    )
}

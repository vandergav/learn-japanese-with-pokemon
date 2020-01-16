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
    const [x, setX] = useState([""])

    useEffect(() => {
        getData();
    }, [])

    const getData = async () => {
        const { pokemonIndex } = match.params
        setX(pokemonIndex)
        console.log(x)
        const pokemonUrl = `https://pokeapi.co/api/v2/pokemon/${pokemonIndex}/`;
        const pokemonSpeciesUrl = `https://pokeapi.co/api/v2/pokemon-species/${pokemonIndex}/`;
        const imgURL = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonIndex}.png`
        const pokemonRes = await axios.get(pokemonUrl)
        const pokemonRes2 = await axios.get(pokemonSpeciesUrl)
        console.log(pokemonRes)
        console.log(pokemonRes2)
        setName(pokemonRes.data.name)
        setNamae(pokemonRes2.data.names[1].name)
        setimgURL(imgURL)
        // setKanjiflavor(pokemonRes2.data.flavor_text_entries[0].flavor_text)
        setKanjiflavor(pokemonRes2.data.flavor_text_entries[pokemonRes2.data.flavor_text_entries.findIndex((todo, index) => { return todo.language.name === "ja" })].flavor_text)
        setEngflavor(pokemonRes2.data.flavor_text_entries[pokemonRes2.data.flavor_text_entries.findIndex((todo, index) => { return todo.language.name === "en" })].flavor_text)

    }

    async function gotoNextPokemon() {
        console.log(parseInt(x) + 1)
        var y = (parseInt(x) + 1)
        console.log("y", y)
        y < 808 ? setX(y) : setX(807)
        console.log("x", x)
        const pokemonUrl = `https://pokeapi.co/api/v2/pokemon/${x}/`;
        const pokemonSpeciesUrl = `https://pokeapi.co/api/v2/pokemon-species/${x}/`;
        const imgURL = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${x}.png`
        const pokemonRes = await axios.get(pokemonUrl)
        const pokemonRes2 = await axios.get(pokemonSpeciesUrl)
        setName(pokemonRes.data.name)
        setNamae(pokemonRes2.data.names[1].name)
        setimgURL(imgURL)
        // setKanjiflavor(pokemonRes2.data.flavor_text_entries[0].flavor_text)
        setKanjiflavor(pokemonRes2.data.flavor_text_entries[pokemonRes2.data.flavor_text_entries.findIndex((todo, index) => { return todo.language.name === "ja" })].flavor_text)
        setEngflavor(pokemonRes2.data.flavor_text_entries[pokemonRes2.data.flavor_text_entries.findIndex((todo, index) => { return todo.language.name === "en" })].flavor_text)
    }

    async function gotoPrevPokemon() {
        console.log(parseInt(x) - 1)
        var y = (parseInt(x) - 1)
        console.log("y", y)
        y > 0 ? setX(y) : setX(1)
        console.log("x", x)
        const pokemonUrl = `https://pokeapi.co/api/v2/pokemon/${x}/`;
        const pokemonSpeciesUrl = `https://pokeapi.co/api/v2/pokemon-species/${x}/`;
        const imgURL = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${x}.png`
        const pokemonRes = await axios.get(pokemonUrl)
        const pokemonRes2 = await axios.get(pokemonSpeciesUrl)
        setName(pokemonRes.data.name)
        setNamae(pokemonRes2.data.names[1].name)
        setimgURL(imgURL)
        // setKanjiflavor(pokemonRes2.data.flavor_text_entries[0].flavor_text)
        setKanjiflavor(pokemonRes2.data.flavor_text_entries[pokemonRes2.data.flavor_text_entries.findIndex((todo, index) => { return todo.language.name === "ja" })].flavor_text)
        setEngflavor(pokemonRes2.data.flavor_text_entries[pokemonRes2.data.flavor_text_entries.findIndex((todo, index) => { return todo.language.name === "en" })].flavor_text)
    }

    return (
        <div className="factfile">
            <img src={imgURL} alt="" width="200" height="200" />
            <h1 style={{ color: 'indianred' }}>{name}</h1>
            <h1 style={{ color: 'blue' }}>{namae}</h1>
            <h2 style={{ backgroundColor: 'AliceBlue' }}>{engflavor}</h2>
            <h2 style={{ backgroundColor: 'Snow' }}>{kanjiflavor}</h2>
            <div className="row">
                <div className="col-4 col-sm-2">
                    {<button type="button" className="btn btn-primary btn-lg" onClick={gotoPrevPokemon}>Previous</button>}
                </div>
                <div className="col-4 col-sm-2">
                    {<button type="button" className="btn btn-warning btn-lg" onClick={gotoNextPokemon} >Next</button>}
                </div>
            </div>
        </div>
    )
}

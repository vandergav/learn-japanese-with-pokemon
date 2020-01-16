import React, { useState, useEffect } from 'react';
import Pagination from './Pagination';
import PokemonList from './PokemonList';
import axios from 'axios';
import './App.css';

export default function Home() {
    const [pokemon, setPokemon] = useState([])
    const [currentPageUrl, setCurrentPageUrl] = useState("https://pokeapi.co/api/v2/pokemon")
    const [nextPageUrl, setNextPageUrl] = useState()
    const [prevPageUrl, setPrevPageUrl] = useState()
    const [loading, setLoading] = useState(true)
    const [imageUrl, setImageUrl] = useState([])

    useEffect(() => {
        setLoading(true)
        let cancel
        axios.get(currentPageUrl, {
            cancelToken: new axios.CancelToken(c => cancel = c)
        }).then(res => {
            setLoading(false)
            setNextPageUrl(res.data.next)
            setPrevPageUrl(res.data.previous)
            setPokemon(res.data.results.map(p => p.name))
            setImageUrl(res.data.results.map(p => p.url))
        })
        return () => cancel()
    }, [currentPageUrl])

    function gotoNextPage() {
        setCurrentPageUrl(nextPageUrl)
    }

    function gotoPrevPage() {
        setCurrentPageUrl(prevPageUrl)
    }

    if (loading) return "Loading..."


    return (
        <div>
            <div className="pagination-style">
                <Pagination
                    gotoNextPage={nextPageUrl ? gotoNextPage : null}
                    gotoPrevPage={prevPageUrl ? gotoPrevPage : null} />
            </div>
            <div>
                <PokemonList
                    pokemon={pokemon}
                    imageUrl={imageUrl} />
            </div>
        </div>
    )
}

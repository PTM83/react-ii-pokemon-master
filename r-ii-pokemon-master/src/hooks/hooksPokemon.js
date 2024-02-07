import { useState, useEffect } from 'react'
import { getApi } from '../services/getApi.js'

export const PokemonComponent = () => {

    const [pokemonName, setPokemonName] = useState([]);
    const urlPokemon = 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20'

    useEffect(()=> {
        const fetchData = async () => {
            const data = await getApi(urlPokemon)
            setPokemonName(data)
        };
        fetchData();
    },[])

    return { pokemonName };
}
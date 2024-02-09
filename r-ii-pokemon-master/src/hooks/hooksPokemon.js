import { useState, useEffect } from 'react'
import { getApi, fetchPokemonDetails } from '../services/getApi.js'
import { initialDetails } from '../services/detailsData.js'

export const PokemonComponent = () => {

    const [pokemonName, setPokemonName] = useState([]); //<--Capta la info de la API de los nombres del Pokemon
    const [pokemonDetails, setPokemonDetails] = useState(initialDetails); //<--Capta la info de la API del detalle Pokemon

    const urlPokemon = 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20'

    useEffect(()=> {
        const fetchData = async () => {
            const data = await getApi(urlPokemon);
            setPokemonName(data);
        };
        fetchData();

    }, []);

    const detailsPokemon = async (pokemonId) => {
        const details = await fetchPokemonDetails(pokemonId);
        setPokemonDetails(details);
    }

    return { pokemonName, detailsPokemon, pokemonDetails };
}


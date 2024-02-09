import { createContext, useState } from 'react'
//Import Hooks
import { PokemonComponent } from '../hooks/hooksPokemon.js'

export const PokemonContext = createContext();

export const PokemonProvider = ({children}) => {

    //Se extrae la Data Inicial API
//     const [selectPokemon, setSelectPokemon] = useState('');
    const { pokemonName, detailsPokemon, pokemonDetails } = PokemonComponent();

    return(
        <PokemonContext.Provider
            value = {{
                pokemonName,
                detailsPokemon,
                pokemonDetails
            }}
        >
            {children}
        </PokemonContext.Provider>
    )
}


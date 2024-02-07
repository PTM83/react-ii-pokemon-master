import { useContext } from 'react'
//Import Hooks
import { PokemonComponent } from '../src/hooks/hooksPokemon.js'

export const PokemonContext = useContext();

export const pokemonProvider = (children) => {

    //Se extrae la Data Inicial API
    const { pokemonName } = PokemonComponent()

    return(
        <PokemonContext.Provider value = {{ pokemonName }}>
            {children}
        </PokemonContext.Provider>
    )
}


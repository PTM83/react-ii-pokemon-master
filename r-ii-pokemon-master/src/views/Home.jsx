import { PokemonComponent } from '../hooks/hooksPokemon.js'
//CSS
import '../assets/mainPokemonHome.css'

export const Home = () => {
    const { pokemonName } = PokemonComponent()
    return(
        <main className='pokemonMainHome'>
            <h1>Esto es el Home</h1>

            <select className='selectPokemon'>
                <option>Choose your Pokemon</option>
                { pokemonName && pokemonName.map( pokemon => {
                    const idPokemon = pokemon.url.split('/').filter(Boolean).pop();

                    return <option key={idPokemon} value={pokemon.name}> {pokemon.name} </option>;
                })}
            </select>

        </main>
    )
}
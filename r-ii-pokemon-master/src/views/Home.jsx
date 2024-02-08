import { PokemonComponent } from '../hooks/hooksPokemon.js'
//CSS
import '../assets/mainPokemonHome.css'

export const Home = () => {
    const { pokemonName } = PokemonComponent()
    return(
        <main className='pokemonMainHome'>

            <picture className='ashPikachu'>
                <img src="./src/images/ash-pikachu.png" alt='Ash with Pikachu'/>
            </picture>

            <div className='letterHome'>
                <h1>Pokemon Master</h1>
                <h2>Choose your Pokemon and Know his ability</h2>
            </div>


            <div className='selectHome'>
            <select className='selectPokemon'>
                <option>Choose your Pokemon</option>
                { pokemonName && pokemonName.map( pokemon => {
                    const idPokemon = pokemon.url.split('/').filter(Boolean).pop();

                    return <option key={idPokemon} value={pokemon.name}> {pokemon.name} </option>;
                })}
            </select>

            <button>Push here</button>
            </div>

        </main>
    )
}
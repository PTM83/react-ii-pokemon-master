import { PokemonComponent } from '../hooks/hooksPokemon.js'

//Import CSS
import '../assets/mainPokemonPersonajes.css'

export const MainPokemon = () => {
    const { pokemonName } = PokemonComponent()

    return (
        <main className='pokemonMainPersonaje'>
            <select className='selectPokemon'>
                    <option>Choose your Pokemon</option>
                { pokemonName && pokemonName.map( pokemon => {
                    const idPokemon = pokemon.url.split('/').filter(Boolean).pop();

                    return <option key={idPokemon} value={pokemon.name}> {pokemon.name} </option>;
                })}
            </select>

            <div className='bodyScreen'>
                <div className='mainScreen'>
                    <h1>Show Pokemon Info</h1>
                </div>

                <div className='buttonScreen'>
                    <button>Start</button>
                    <img src='../src/images/menu.png' alt='simular-altavoces'/>
                </div>
            </div>
        </main>
    )
}
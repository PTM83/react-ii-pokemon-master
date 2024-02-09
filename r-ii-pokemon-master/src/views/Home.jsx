import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
//Context
import { PokemonContext } from '../context/ContextPokemon.jsx'
//CSS
import '../assets/mainPokemonHome.css'

export const Home = () => {



    const { pokemonName, detailsPokemon, pokemonDetails } = useContext(PokemonContext)
//     const { pokemonName } = PokemonComponent()

    //pokemonName <-- Nombre de los Pokemones
    //detailsPokemon <-- Función que permite obtener los detalles de cada Pokemon
    //pokemonDetails <-- Contiene la información obtenida por detailsPokemon

    const navigate = useNavigate();

    const handleSelect = (event) => {
//         setSelectPokemon(event.target.value)
        detailsPokemon(event.target.value)
    }

    const goToDetails = () => {
        if(!pokemonDetails.id) {
            return
        } else {
            navigate(`/characters/${pokemonDetails.id}`)
        }
    }

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
                <select className='selectPokemon' onChange={handleSelect} >
                    <option>Choose your Pokemon</option>
                    { pokemonName && pokemonName.map( pokemon => {
                        const idPokemon = pokemon.url.split('/').filter(Boolean).pop();

                        return (
                        <option key={idPokemon} value={idPokemon}> {pokemon.name} </option>
                        );

                    })}
                </select>

                <button onClick={goToDetails}>Push here</button>
            </div>

        </main>
    )
}
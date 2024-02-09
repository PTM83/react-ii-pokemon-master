import { useParams } from 'react-router-dom'
import { useEffect, useContext } from 'react'
//Context
import { PokemonContext } from '../context/ContextPokemon.jsx'
//Import CSS
import '../assets/mainPokemonPersonajes.css'

export const MainPokemon = () => {

    const { id } = useParams()
    const { pokemonDetails } = useContext(PokemonContext)

    const baseStat = pokemonDetails['stats'].map( base => base.base_stat)
    const nameStat = pokemonDetails['stats'].map( nameStat => nameStat.stat.name)

    console.log(baseStat)
    console.log(nameStat)
    console.log(pokemonDetails.types[0].type.name)

    return (
        <main className='pokemonMainPersonaje'>

            <div className='bodyScreen'>
                <div className='mainScreen'>
                    <picture className='bodyImage'>
                        <img src={pokemonDetails.sprites.other.dream_world.front_default} alt='Equipo Rocket' />
                    </picture>
                    <div>
                        <h1>Show Pokemon Info</h1>
                        <h2> Personaje Id {id} </h2>
                    </div>
                </div>

                <div className='buttonScreen'>
                    <button>Start</button>
                    <img src='../src/images/menu.png' alt='simular-altavoces'/>
                </div>
            </div>
        </main>
    )
}
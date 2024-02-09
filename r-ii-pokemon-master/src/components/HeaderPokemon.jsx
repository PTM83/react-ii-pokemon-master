import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
//Context
import { PokemonContext } from '../context/ContextPokemon.jsx'

import { NavLinkPokemon } from '../components/NavLinkPokemon.jsx'

//CSS
import '../assets/headerHome.css'

export const HeaderPokemon = () => {

    const { pokemonDetails } = useContext(PokemonContext)

    return (
        <header>
            <h1>Maestro Pokemon</h1>
            <nav>
                <ul className="headerUl">
                    <li>
                        <NavLinkPokemon to="/">
                            Home
                        </NavLinkPokemon>
                    </li>
                    <li>
                        <NavLinkPokemon to={`/characters/${pokemonDetails.id}`}>
                            Characters
                        </NavLinkPokemon>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
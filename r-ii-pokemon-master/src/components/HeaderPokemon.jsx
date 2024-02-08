import { NavLink } from 'react-router-dom'

import { NavLinkPokemon } from '../components/NavLinkPokemon.jsx'

//CSS
import '../assets/headerHome.css'

export const HeaderPokemon = () => {
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
                        <NavLinkPokemon to='/characters'>
                            Characters
                        </NavLinkPokemon>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
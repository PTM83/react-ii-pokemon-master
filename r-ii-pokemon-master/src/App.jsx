import { Route, Routes } from 'react-router-dom'
//Views
import { Home } from './views/Home.jsx'
import { Personajes } from './views/Personajes.jsx'
//Components
import { HeaderPokemon } from './components/HeaderPokemon.jsx'
import { FooterPokemon } from './components/FooterPokemon.jsx'
//CSS
import './index.css'

export const App = () => {


//     const pruebaID = pokemonName.map( urlId => urlId.url.split('/').filter(Boolean).pop())
//
//     console.log(pruebaID)

    return (
        <section className='container'>
            <HeaderPokemon />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/characters" element={<Personajes />} />
            </Routes>

            <FooterPokemon />
        </section>
    )
}
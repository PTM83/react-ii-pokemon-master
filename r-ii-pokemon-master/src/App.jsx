import { MainPokemon } from './components/MainPokemon.jsx'
import './index.css'

export const App = () => {


//     const pruebaID = pokemonName.map( urlId => urlId.url.split('/').filter(Boolean).pop())
//
//     console.log(pruebaID)

    return (
        <section className='container'>
            <header>
                <h1>Maestro Pokemon</h1>
            </header>

            <MainPokemon />

            <footer>
                <h2>Footer</h2>
            </footer>
        </section>
    )
}
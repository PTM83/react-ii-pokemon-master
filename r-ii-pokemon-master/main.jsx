import { App } from './src/App.jsx'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { PokemonProvider } from './src/context/ContextPokemon.jsx'


const root = createRoot(document.getElementById('app'))

root.render(
    <BrowserRouter>
        <PokemonProvider>
            <App />
        </PokemonProvider>
    </BrowserRouter>
)
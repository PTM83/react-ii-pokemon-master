import { App } from './src/App.jsx'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

const root = createRoot(document.getElementById('app'))

root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
)
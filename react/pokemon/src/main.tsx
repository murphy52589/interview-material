import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import PokemonStarter from "./starter/PokemonStarter.tsx";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <PokemonStarter />
  </React.StrictMode>,
)

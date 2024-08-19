import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {DogBreedsStarter} from "./Starter/DogBreedsStarter.tsx";

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <DogBreedsStarter/>
    </React.StrictMode>,
)

import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import Starter from "./Starter";
import Solution from "./Solution";

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <Starter/>
        {/*<Solution/>*/}
    </StrictMode>,
)

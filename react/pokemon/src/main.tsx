import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Starter from "./starter/Starter.tsx";
import Solution from './solution/Solution.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* <Starter /> */}
    <Solution />
  </React.StrictMode>,
)

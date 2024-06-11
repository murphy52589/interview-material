import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import UserFormStarter from "./UserFormStarter.tsx";
import UserFormSolution from './UserFormSolution.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* <UserFormStarter /> */}
    <UserFormSolution />
  </React.StrictMode>,
)

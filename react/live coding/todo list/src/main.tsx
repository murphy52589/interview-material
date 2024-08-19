import React from 'react'
import ReactDOM from 'react-dom/client'
import {TodoList} from './Solution/TodoListSolution.tsx'
import './index.css'


ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <TodoList/>
    </React.StrictMode>,
)

import React from 'react'
import ReactDOM from 'react-dom'

//Components
import Dados from './components/Dados'
import App from './App'

ReactDOM.createRoot(document.getElementById('root')).render(
    <>
        <App />
        <Dados titulo="Login" />
        <Dados titulo="Cadastro" />
    </>
)

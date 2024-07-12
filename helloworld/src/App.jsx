import React from "react"


//Components
//import Cadastro from './components/Cadastro/Cadastro'
import Login from './components/Login/Login'
import Imagem from "./components/Form/Img"

//CSS
import './css/App.css'

function App() {

  return (
    <>
    <div className="container">
      <Login/>
      <Imagem/>
    </div>
    </>
  )
}

export default App

import React from "react"


//Components
import Cadastro from './components/Cadastro'
import Login from './components/Login'

//CSS
import './css/App.css'

function App() {

  let Dados = [
    { Nome: "Nicolas", Email: "nicolasreis" },
    { Nome: "João", Email: "joao" },
    { Nome: "Maria", Email: "maria" },
    { Nome: "Ana", Email: "ana" },
    { Nome: "Pedro", Email: "pedro" },
  ]

  return (
    <>
      <Cadastro
        titulo="Cadastro"
        nome={Dados[0].Nome} // Recebe o dado do array (pode ser considerado banco de dados)
        email={Dados[0].Email} // Recebe o dado do array (pode ser considerado banco de dados)
      />
      <Login 
        titulo="Login"
        nome={Dados[1].Nome} // Recebe o dado do array (pode ser considerado banco de dados)
        email={Dados[1].Email} // Recebe o dado do array (pode ser considerado banco de dados)
      />
    </>
  )
}

export default App

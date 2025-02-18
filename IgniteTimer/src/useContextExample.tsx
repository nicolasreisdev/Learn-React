

/**
 * useContext: É um hook que permite a passagem de dados entre componentes sem a necessidade de passar props manualmente.
 "compartilhamento de estado/variáveis entre componentes"
  - Provider: é um componente que envolve os componentes que terão acesso ao contexto.
    - createContext: cria um contexto.
    - useContext: é um hook que permite a passagem de dados entre componentes sem a necessidade de passar props manualmente.
    
 */



import { createContext, useContext, useState } from "react"

const CyclesContext = createContext({} as any)

function CountDown(){
    const { activeCycle} = useContext(CyclesContext)

    return(
        <h1>CoutDown: {activeCycle}</h1>
    )
}

function NewCycleFomr(){

    const { activeCycle} = useContext(CyclesContext)    

    return(
        <h1>NewCycleForm: {activeCycle}</h1>
    )
}


export function Home(){

    const [activeCycle, setActiveCycle] = useState(0)


    return(
        <CyclesContext.Provider value={{ activeCycle, setActiveCycle }}>
            <div>
                <CountDown/>
                <NewCycleFomr/>
            </div>
        </CyclesContext.Provider>
)
}
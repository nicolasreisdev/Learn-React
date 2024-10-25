import { Test } from './Test' 
import { Header } from './components/Header' // componente de cabeçalho
import { Sidebar } from './components/Sidebar'

import  style from './App.module.css'

import './global.css' // modelo de css global

function App() {
  return (
    <>
      <Header/>

      <div className={style.wrapper}>
        <Sidebar/>
        <main>
          <Test 
            author="Nicolas"
            content="This is a test" 
          />
        </main>
      </div>
    </>
  )
}

export default App

import { Routes, Route }from 'react-router-dom'
import { Home } from './pages/Home'
import { Login } from './pages/Login'
import { Register } from './pages/Register'
import { Infos } from './pages/Infos'


export function Router(){
    return(
        <Routes> 
            <Route path="/" element={<Home/>}/>
            <Route path="/Login" element={<Login/>}></Route>
            <Route path="/Register" element={<Register/>}></Route>
            <Route path="/Infos" element={<Infos/>}></Route>
        </Routes>
    )
}
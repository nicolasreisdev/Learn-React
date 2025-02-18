// import styles from './HeaderInitial.module.css'
import { NavLink } from 'react-router-dom'
import { Sidebar } from '../Sidebar/Sidebar'
import { HeaderInitialContainer, Title, Buttons, Button } from './styles'


export function HeaderInitial() {
  return (
    <HeaderInitialContainer>

        <Sidebar />
        <Title>
            <h2>Odyssey Language</h2>
        </Title>


        <Buttons>
            <Button>
              <nav>
                <NavLink to="/login">Login</NavLink>
              </nav>
            </Button>
            <Button>
              <NavLink to="/register">Register</NavLink>
            </Button>
        </Buttons>
    </HeaderInitialContainer>
  )
}
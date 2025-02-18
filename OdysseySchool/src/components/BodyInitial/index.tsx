// import styles from './BodyInitial.module.css'
import  LogoOdyssey  from '../../assets/logo_exibicao.png'
import { BodyInitialContainer, BoxLeft, BoxRight, Buttons, Button } from './styles'
import { NavLink } from 'react-router-dom'



export function BodyInitial(){
    return(
        <BodyInitialContainer>
            <BoxLeft>
                <h1>Make learning fun!</h1>
                <p>Aprender inglês nunca foi tão fácil</p>
                <Buttons>
                    <Button>
                        <nav>
                            <NavLink to="/Register">Começar agora</NavLink>
                        </nav>
                    </Button>
                    <Button>
                        <nav>
                            <NavLink to="/Infos">Saiba mais</NavLink>
                        </nav>
                    </Button>
                </Buttons>
            </BoxLeft>
            <BoxRight>
                <img src={LogoOdyssey} alt="Logo Odyssey" />
            </BoxRight>
        </BodyInitialContainer>
    )
}
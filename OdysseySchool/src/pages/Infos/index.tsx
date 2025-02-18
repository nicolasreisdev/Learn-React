import { MainPage, ScrollContainer, BoxRight, BoxLeft } from "./styles";
import { NavLink } from 'react-router-dom'
import Cartas from '../../assets/pngs/Cartas.png'
import Calendar from '../../assets/pngs/Calendar.png' 
import Computer from '../../assets/pngs/Computer.png'
import { Footer } from "../../components/Footer";

export function Infos(){
    return(
        <div>
            <MainPage>
                <h1>Odyssey Classroom</h1>

                <h2>A Odyssey é uma escola de idiomas criada com o
                    objetivo de priorizar os processos individuais na 
                    aprendizagem do inglês.
                </h2>
                <h2>
                    O seu processo é único e deseja ser priorizado
                    e celebrado. Let's do it!
                </h2>

                <button>
                    <nav>
                        <NavLink to="/Register">Estou pronto(a) para iniciar!</NavLink>
                    </nav>
                </button>
            </MainPage>

            <ScrollContainer>

                <BoxLeft>
                    <h1>Pratique vocabulários</h1>
                    <h2>Utilize um baralho de cartas programado para revisar e aprender vocabulários
                        que irão alavancar seu nível de inglês.
                    </h2>
                </BoxLeft>

                <BoxRight>
                    <img src={Cartas} alt="" />
                </BoxRight>

            </ScrollContainer>

            <ScrollContainer>

                <BoxLeft>
                    <img src={Calendar} alt="" />
                </BoxLeft>

                <BoxRight>
                    <h1>Mantenha a constância</h1>
                    <h2>Constância é a chave do sucesso. Pratique todos os dias pelos minutos
                         ou horas possíveis e chegue mais perto dos seus objetivos.</h2>
                </BoxRight>

            </ScrollContainer>

            <ScrollContainer>

                <BoxLeft>
                    <h1>Ensino personalizado para você!</h1>
                    <h2>Técnicas da neurolinguistica combinadas com algoritmo de aprendizagem 
                        espaçada que personaliza os conteúdos entregues de acordo com seus acertos
                        e erros.</h2>
                </BoxLeft>

                <BoxRight>
                    <img src={Computer} alt="" />
                </BoxRight>

            </ScrollContainer>

            <Footer/>
        </div>
    )
}   
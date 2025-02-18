import styled from 'styled-components';


export const HeaderInitialContainer = styled.header`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1em;
    background-color: ${props => props.theme['white']};
    position: relative;
    width: 100%;
`


export const Title = styled.div`
    font-size: 1rem;
    font-weight: bold;
    color: ${props => props.theme['black']};
    position: absolute;
`



export const Buttons = styled.div`
    display: flex;
    justify-content:right;
    margin-left: auto;
`

export const Button = styled.button`
    margin-left: 1em;
    /* Espaçamento entre os botões */
    padding: 0.5em 1em;
    font-size: 1rem;
    color: ${props => props.theme['balck']};
    background-color: ${props => props.theme['orangeLight']};
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s;


 &:hover {
    background-color: ${props => props.theme['orange']};
}
`
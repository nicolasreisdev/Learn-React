import styled from 'styled-components';


export const BodyInitialContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: var(--white);
`;

export const BoxLeft = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: ${props => props.theme['black']};
    background-color: ${props => props.theme['white']};
    margin-right: 1em;

    h1 {
        font-family: 'Montserrat Alternates', sans-serif;
        font-size: 74px;
    }
    p {
        font-family: 'Work Sans', serif;
        font-size: 24px;
        color: ${props => props.theme['gray']}; 
    }
`

export const BoxRight = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: ${props => props.theme['white']};
    margin-left:4rem;
`

export const Buttons = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-top: 1em;
`

export const Button = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 10em;
    height: 3em;
    margin: 0.5em;
    border: none;
    border-radius: 1.3em;
    background-color: ${props => props.theme['orangeLight']};
    color: var(--balck);
    font-size: 1em;
    font-weight: bold;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
        background-color: ${props => props.theme['orange']};
    }
`
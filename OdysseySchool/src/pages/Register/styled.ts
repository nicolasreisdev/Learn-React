import styled from 'styled-components';

export const RegisterContainer = styled.main`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: var(--white);
`

export const BoxRight = styled.div`
    flex: 1;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: ${props => props.theme['orangeLight']};
    /* margin-left: 5rem; */
    /* margin-right: 5em; */

    img{
        border: 1px solid ${props => props.theme['white']};
        border-radius: 10rem;
    }
`


export const BoxLeft = styled.div`
    flex: 1;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: ${props => props.theme['black']};
    background-color: ${props => props.theme['white']};
    margin-left: 5rem;
    margin-right: 5em;

    h2{
        margin-bottom: 2rem;
        text-align: center;
    }

    input{
        display: block;
        width: 100%;
        margin-bottom: 1rem;
        padding: 0.5rem;
        border: 3px solid ${props => props.theme['black']};
        border-radius: 0.5rem;
    }

    button{
        display: block;
        width: 100%;
        padding: 0.5rem;
        border: 3px solid ${props => props.theme['black']};
        border-radius: 0.5rem;
        background-color: ${props => props.theme['orangeLight']};
        color: ${props => props.theme['black']};

        &:disabled{
        opacity: 0.7;
        cursor: not-allowed;
        }

        &:not(:disabled):hover{
            background: ${props => props.theme['black']};
            color: ${props => props.theme['white']};
        }
    }
`
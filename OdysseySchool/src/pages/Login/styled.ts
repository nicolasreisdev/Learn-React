import styled from 'styled-components';


export const LoginContainer = styled.main`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: var(--white);
`

export const BoxRight = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: ${props => props.theme['white']};
    margin-left: 5rem;
    margin-right: 5rem;
`

export const BoxLeft = styled.div`
    flex: 1;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: ${props => props.theme['black']};
    background-color: ${props => props.theme['orangeLight']};

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
`


export const BaseInput = styled.input`
    background: ${props => props.theme['white']};
    height: 2.5rem;
    border: 0;
    border-bottom: 2px solid ${props => props.theme['gray-500']};
    font-weight: bold;
    font-size: 1.125rem;
    padding: 0 0.5rem;
    color: ${props => props.theme['black']};

    &:focus{
        box-shadow: none;
        border-color: ${props => props.theme['white']};
    } 

    &::placeholder {
        color: ${props => props.theme['gray-500']};
    }
`


export const CheckButton = styled.button`
    width: 100%;
    border: 1px solid ${props => props.theme['black']};
    padding: 1rem;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    font-weight: bold;


    cursor: pointer;

    background-color: ${props => props.theme['orange']};
    color: ${props => props.theme['black']};

    &:disabled{
        opacity: 0.7;
        cursor: not-allowed;
    }

    &:not(:disabled):hover{
        background: ${props => props.theme['black']};
        color: ${props => props.theme['white']};
    }
`
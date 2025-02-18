import styled from 'styled-components'


export const MainPage = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
    flex: 1;
    background: ${props => props.theme['orangeLight']};
    height: 100vh;
    overflow-y: auto;
    h1{
        font-family: 'Caveat';
        font-size: 3rem;
        text-align: center;
        margin-block: 5rem;
    }

    h2{
        font-family: 'Roboto', sans-serif;
        font-weight: 300;
        text-align: center;
        margin-block: 1rem;
        color: ${props => props.theme['black']};
        width: 35%;
    }

    button{
        margin-block: 2rem;
        padding: 1rem;
        border: 1px solid ${props => props.theme['black']};
        border-radius: 0.5rem;
        background: ${props => props.theme['white']};
        color: ${props => props.theme['black']};
        cursor: pointer;
        transition: 0.3s;

        &:hover{
            background: ${props => props.theme['whiteLight']};
            color: ${props => props.theme['black']};
        }
    }

`


export const ScrollContainer = styled.div`
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

    img{
        border: 1px solid ${props => props.theme['white']};
    }

    h1{
        text-align: center;
        margin-block: 5rem;
    }
    h2{
        font-family: 'Roboto', sans-serif;
        font-weight: 300;
        text-align: center;
        margin-block: 1rem;
        color: ${props => props.theme['black']};
        width: 70%;
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
    margin-right: 5rem;

    img{
        border: 1px solid ${props => props.theme['white']};
    }

    h1{
        text-align: center;
        margin-block: 5rem;
    }
    h2{
        font-family: 'Roboto', sans-serif;
        font-weight: 300;
        text-align: center;
        margin-block: 1rem;
        color: ${props => props.theme['black']};
        width: 70%;
    }

`

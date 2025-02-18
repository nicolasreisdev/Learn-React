import styled from 'styled-components';



export const SidebarContainer = styled.main`
    display: flex;
    align-items: center;
    position: relative;
`


export const SidebarList = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    height: 100vh;
    width: 0;
    background-color: ${props => props.theme['white']};
    color: ${props => props.theme['black']};
    overflow: hidden;
    transition: width 0.3s;

    &:hover{
        width: 200px;
        border-right: 2px solid ${props => props.theme.orange};
    }
    
    img {
        width: 100%;
        height: auto;
    }

`


export const SidebarIcon = styled.div`
        height: 50px;
        width: 50px;
        background-color: ${props => props.theme['white']};
        color:  ${props => props.theme['orange']};
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
    
        &:hover + ${SidebarList}{    
            width: 200px;
        }
    
    `
export const NavList = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 1em;
    padding-top: 2em;
`

export const NavItem = styled.li`
    text-decoration: none;
    color: var(--black);
    font-weight: 500;   
`
export const LogoSidebar = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1em;
    height: 10rem;
    width: 100%;

`
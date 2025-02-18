import MenuIcon from '../../assets/icons/menu-icon.svg'
import LogoOdyssey from '../../assets/OdysseyLogo.svg'
import { LogoSidebar, NavItem, NavList, SidebarContainer, SidebarIcon, SidebarList } from './styles'
import { NavLink } from 'react-router-dom'


export function Sidebar() {
    return (
      <SidebarContainer>

        <SidebarIcon>
          <img src={MenuIcon} alt="Menu Icon" />
        </SidebarIcon>

        <SidebarList>
          <LogoSidebar>
            <img src={LogoOdyssey} alt="Logo Odyssey" />
          </LogoSidebar>

          <NavList>

            <NavItem>
                <NavLink to="/Infos">Saiba Mais</NavLink>
            </NavItem>

          </NavList>

        </SidebarList>
    </SidebarContainer>
    )
} 
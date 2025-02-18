import styles from './HeaderPag.module.css'
import { Sidebar } from './Sidebar/Sidebar'
import OdysseyLogo from '../assets/OdysseyLogo.svg'


export function HeaderPag() {
  return (
    <div className={styles.header}>
      <div className={styles.sidebar}>
        <Sidebar />
      </div>

      <img className={styles.headerImage} 
      src={OdysseyLogo} alt="Logotipo Odyssey" />
    </div>
  )
}
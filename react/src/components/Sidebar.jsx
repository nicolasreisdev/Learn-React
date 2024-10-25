import style from './Sidebar.module.css';

//import {} from 'phosphor-react'

export function Sidebar(){
    return(
        <aside className={style.sidebar}>
            <img className={style.cover}
            src="https://images.unsplash.com/photo-1729546493750-314d158125fa?q=60&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />

            <div className={style.profile}>

                <img className={style.avatar} src="https://github.com/nicolasreisdev.png"
                 />

                <strong>Nicolas Eliel</strong>
                <span> Full-Stack Developer</span>
            </div>

            <footer>
                <a href="#">
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    );
}
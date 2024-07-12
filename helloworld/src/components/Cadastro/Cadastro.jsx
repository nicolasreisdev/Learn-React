import style from './Cadastro.module.css';

export default function Dados() {
    return (
        <form className={style.form}>
            <div>
                <input type="text" placeholder="Insira seu nome" />
            </div>
            <div>
                <input type="text" placeholder="Insira seu email" />
            </div>
            <div>
                <input type="password" placeholder="Insira sua senha" />
            </div>
            <div>
                <input type="submit" placeholder="Enviar" />
            </div>
        </form>
    )
}

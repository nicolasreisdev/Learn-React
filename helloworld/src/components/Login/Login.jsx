import Input from "../Form/Input";
//import Select from "../Form/Select";
import Button from "../Form/SubmitButton";
import styles from "./Login.module.css";
//import Imagem from "../Form/Img";

export default function Dados() {
    return (
        <>
        <div className={styles.body}>
            <form className={styles.form}>
                <h2>Faça login para acessar o seu perfil</h2>
                <Input
                    type="text"
                    name="email"
                    text="Email do usuário"
                    placeholder="Insira seu nome ou email"
                />
                <Input
                    type="password"
                    name="senha"
                    text="Senha do usuário"
                    placeholder="Insira sua senha"
                />
                <Button
                    text="Enviar"
                />
            </form>
        </div>
        </>
    )
}

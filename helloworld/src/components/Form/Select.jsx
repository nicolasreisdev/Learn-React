import styles from "./Select.module.css";

function Select(props){
    return(
        <div className={styles.form_control}>
            <label htmlFor={props.name}>{props.text}</label>
            <select name={props.name} id={props.name}>
                <option>Selecione uma Opção</option>
            </select>
        </div>
    )
}

export default Select;
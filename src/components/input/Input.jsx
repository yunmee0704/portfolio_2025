import styles from "./Input.module.scss";

const inputList = [
    {id:1, placeholder: "name"},
    {id:2, placeholder: "email"},
];

const inputItem = inputList.map(item => 
    <input key={item.id} className={styles.input} placeholder={item.placeholder} />
)

function Input() {
    return (
        inputItem
    )
}

export default Input;
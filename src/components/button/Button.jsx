import styles from "./Button.module.scss";

function Button({text,link}) {
    return (
        <a className={styles.default} href= {link}>
            {text}
        </a>
    )
}

export default Button;
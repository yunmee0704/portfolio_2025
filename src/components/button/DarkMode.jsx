import styles from "./Button.module.scss";


function DarkModeBtn({mode, onToggle}) {

    return (
        <button className={`${styles.modeBtn} ${ mode ? 'lightmode':'darkmode'}`} onClick={onToggle}>
            <span>{mode? '☀️':'🌙'}</span>
        </button>
    )
}

export default DarkModeBtn;
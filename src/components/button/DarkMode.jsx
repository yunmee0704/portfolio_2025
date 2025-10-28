import "./Button.scss";


function DarkModeBtn({mode, onToggle}) {

    return (
        <button className={`modeBtn ${ mode ? 'lightmode':'darkmode'}`} onClick={onToggle}>
            <span>{mode? '☀️':'🌙'}</span>
        </button>
    )
}

export default DarkModeBtn;
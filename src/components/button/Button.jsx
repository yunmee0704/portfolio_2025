import "./Button.scss";

function Button({mode,onToggle,text}) {
    return (
        <button className={`default ${ mode ? 'lightmode':'darkmode'}`} onClick={onToggle}>
            {text}
        </button>
    )
}

export default Button;
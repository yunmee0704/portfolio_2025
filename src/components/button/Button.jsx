import "./Button.scss";

function Button({mode,onToggle}) {
    return (
        <button className={`default ${ mode ? 'lightmode':'darkmode'}`} onClick={onToggle}>
            Button
        </button>
    )
}

export default Button;
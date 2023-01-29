import './Button.css'

function Button(props) {
    return (
        <button onClick={props.generateQuoteHandler}>
            {props.value}
        </button>
    )
}

export default Button;
import './Quote.css'

function Quote(props) {
    return (
        <div>
            <div className={"quote-text" + (props.quote.length && props.quote.length > 50 ? " long-quote" : "")}>{props.quote.text}</div>
            <div className="quote-author">{props.quote.author}</div>
        </div>
    )
}

export default Quote;
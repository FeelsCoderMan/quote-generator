import {useState} from 'react';
import Quote from './Quote';
import Button from './Button';
import './QuoteCard.css'

function QuoteCard(props) {
    const [quote, setQuote] = useState(!props.savedQuote ? {
        text: "Welcome to Quote Generator. Press the 'Next Quote' button to generate a new quote.",
        author: "Dev"
    } : props.savedQuote);

    
    async function generateQuoteHandler() {
        props.setLoading(true);
        const baseUrl = "https://api.quotable.io/";

        try {
            var response = await fetch(baseUrl + "random");
            var nextQuote = await response.json();
            var nextQuoteObj = {
                text: nextQuote.content,
                author: nextQuote.author,
                length: nextQuote.length
            }
            setQuote(nextQuoteObj)
            props.setLoading(false, nextQuoteObj)
        } catch (e) {
            console.log("Unexpected error occurred: " + e.message);
        }

        props.setLoading(false);
    }

    return (
        <div className="quote-container">
            <Quote quote={quote}></Quote>
            <div className="button-container">
                <Button value="Next Quote" generateQuoteHandler={generateQuoteHandler}></Button>
            </div>
        </div>
    );
}

export default QuoteCard;
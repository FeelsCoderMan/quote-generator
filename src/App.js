import './App.css';
import { useState } from 'react';
import QuoteCard from '../src/components/QuoteCard';
import Loader from '../src/components/Loader'

function App() {
  // TODO: Use parcel
  // TODO: Use Redux
  // TODO: Change favicon
  const [savedQuote, setSavedQuote] = useState();
  const [isLoading, setIsLoading] = useState(false);

  function setLoadingHandler(boolean, quote) {
    setIsLoading(boolean);
    
    if (quote) {
      setSavedQuote(quote);
    }
  } 

  return (
    <div>
        {!isLoading ? <QuoteCard setLoading={setLoadingHandler} savedQuote={savedQuote}></QuoteCard> : <Loader isLoading={isLoading} ></Loader>}
    </div>
  );
}

export default App;

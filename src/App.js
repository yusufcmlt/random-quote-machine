import React, { useState, useEffect } from "react";
import "./App.css";

//Quotes json
const quoteURL =
  "https://gist.githubusercontent.com/pdouu/721a1680752d7409997d70a666a710ac/raw/325d51aca7165b2498971afcff9bed286a52dc0e/quotes.json";

//Background color gradient
const backgroundList = [
  "peach-gradient",
  "aqua-gradient",
  "warm-flame-gradient",
  "young-passion-gradient",
  "rainy-ashville-gradient",
  "sunny-morning-gradient",
  "blue-gradient"
];

function App() {
  //States for background quote and quote author
  const [appBG, setAppBG] = useState("blue-gradient");
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  //Getting random quotes on page reload or first load
  useEffect(() => {
    getRandomQuoteData();
  }, []);

  //Getting random quotes and random background
  //On reload or on click
  const getRandomQuoteData = () => {
    //Setting two numbers for getting random background and quotes
    let randomQuoteIndex = Math.floor(Math.random() * 102);
    let randomBackgroundIndex = Math.floor(Math.random() * 6);
    console.log(randomBackgroundIndex);

    //Getting quotes from given json.
    //Selecting random quote and its author by random number.
    fetch(quoteURL)
      .then(quoteResponse => {
        return quoteResponse.json();
      })
      .then(quoteData => {
        setQuote(quoteData[randomQuoteIndex].quote);
        setAuthor(quoteData[randomQuoteIndex].author);
        setAppBG(backgroundList[randomBackgroundIndex]);
      })
      .catch(quoteError => {
        console.log(quoteError);
      });
  };
  //Render
  return (
    <div id="dis-container" className={appBG + " container-fluid vh-100"}>
      <div id="quote-container" className="row justify-content-center h-100">
        <div id="quote-box" className="col-4 text-center my-auto h-25">
          <div id="text" className="row text-dark h2 justify-content-center">
            <p>{quote}</p>
          </div>
          <div id="author" className="row text-dark h4 justify-content-end">
            <p>{"- " + author}</p>
          </div>
          <div
            id="buttons-container"
            className="row align-items-end justify-content-between mt-5"
          >
            <a
              id="tweet-quote"
              href={
                "https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=" +
                quote +
                "-" +
                author
              }
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-lg peach-gradient "
            >
              Tweet
            </a>
            <button
              id="new-quote"
              className="btn btn-lg purple-gradient"
              onClick={getRandomQuoteData}
            >
              New Quote
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

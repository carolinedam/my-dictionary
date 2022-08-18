import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./SearchEngine.css";

export default function SearchEngine(props) {
  let [word, setWord] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);

  // documentation: https://dictionaryapi.dev/

  function displayWord(response) {
    setResults(response.data[0]);
  }

  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    axios.get(apiUrl).then(displayWord);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function updateWord(event) {
    setWord(event.target.value);
  }

  if (loaded) {
    return (
      <div className="SearchEngine">
        <form className="Searchform" onSubmit={handleSubmit}>
          <section>
            <input type="text" autoFocus="on" onChange={updateWord} class="SearchedWord"></input>
          </section>
          <input type="submit" value="Search"></input>
          <Results results={results} />
        </form>
      </div>
    );
  } else {
    setLoaded(true);
    search();
  }
}

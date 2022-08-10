import React, { useState } from "react";
import axios from "axios";
import "./SearchEngine.css";

export default function SearchEngine() {
  let [word, setWord] = useState(null);

  // documentation: https://dictionaryapi.dev/

  function displayWord(response) {
    console.log(response.data[0].word);
  }

  function handleSubmit(event) {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    event.preventDefault();
    axios.get(apiUrl).then(displayWord);
  }

  function updateWord(event) {
    setWord(event.target.value);
  }

  return (
    <div className="SearchEngine">
      <form className="Searchform" onSubmit={handleSubmit}>
        <input type="text" autoFocus="on" onChange={updateWord}></input>
        <input type="submit" value="Search"></input>
      </form>
    </div>
  );
}

import React, { useState } from "react";
import axios from "axios";
import "./SearchEngine.css";

export default function SearchEngine() {
  let [word, setWord] = useState(null);

  // documentation: https://dictionaryapi.dev/

  function handleSubmit(event) {
    event.preventDefault();
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
      <div className="searchedWord">{word}</div>
    </div>
  );
}

import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";
import "./SearchEngine.css";

// All requests made with the client will be authenticated

export default function SearchEngine(props) {
  let [word, setWord] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [photos, setPhotos] = useState(null);

  // documentation: https://dictionaryapi.dev/

  function displayWord(response) {
    setResults(response.data[0]);
  }

  function handleDictionaryResponse(response) {
    setPhotos(response.data.photos);
  }

  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    axios.get(apiUrl).then(displayWord);

    let pexelsApiKey =
      "563492ad6f917000010000017d91846c13a34d02bcabc2a991f2a060";
    let pexelsApiUrl = `https://api.pexels.com/v1/${word}?per_page=9`;
    let headers = { Authorization: `Bearer ${pexelsApiKey}` };

    axios
      .get(pexelsApiUrl, { headers: headers })
      .then(handleDictionaryResponse);
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
          <input
            type="text"
            autoFocus="on"
            onChange={updateWord}
            className="Searched-word"
          ></input>
          <input type="submit" value="Go!" className="Search-button"></input>
          <Results results={results} />
          <Photos photos={photos} />
        </form>
      </div>
    );
  } else {
    setLoaded(true);
    search();
  }
}

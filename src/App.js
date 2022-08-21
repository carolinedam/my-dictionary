import logo from "./logo.png";
import "./App.css";
import SearchEngine from "./SearchEngine";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <section>
            <h2>Enter a word to search:</h2>

            <SearchEngine defaultKeyword="hello" />
          </section>
        </header>
        <footer>
          Coded by Caroline D'Ambro and{" "}
          <a href="https://github.com/carolinedam" target="_blank">
            open-sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}

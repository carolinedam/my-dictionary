import logo from "./logo.png";
import "./App.css";
import SearchEngine from "./SearchEngine";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <SearchEngine defaultKeyword="wine" />
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

export default App;

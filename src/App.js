import logo from "./logo.png";
import "./App.css";
import SearchEngine from "./SearchEngine";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>We're building a dictionary app!</p>
          <SearchEngine />
        </header>
        <footer>Coded by Caroline D'Ambro</footer>
      </div>
    </div>
  );
}

export default App;

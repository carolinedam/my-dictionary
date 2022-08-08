import logo from "./logo.png";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>We're building a dictionary app!</p>
        <a
          className="App-link btn btn-primary"
          href="#"
          target="_blank"
          rel="noopener noreferrer"
        >
          Let's Go
        </a>
      </header>
    </div>
  );
}

export default App;

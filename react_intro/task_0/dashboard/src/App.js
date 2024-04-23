import "./App.css";
import holberton from "./holberton.jpg";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={holberton} alt="holberton" />
        <h1>School dashboard</h1>
      </header>
      <div className="App body">
        <p>Login to access the full dashboard</p>
      </div>
      <footer className="App-footer">
        <p>Copyright 2020 - holberton School</p>
      </footer>
    </div>
  );
}

export default App;

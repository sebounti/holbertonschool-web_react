import React from "react";
import "./App.css";
import holberton from "./holberton.jpg";
import { getFullYear, getFooterCopy } from "../utils/utils.js";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={holberton} alt="holberton Logo" />
        <h1>School dashboard</h1>
      </header>
      <div className="App-body">
        <p>Login to access the full dashboard</p>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" />
        <label htmlFor="password">Password</label>
        <input type="password" id="password" />
        <button>OK</button>
      </div>
      <footer className="App-footer">
        <p>
          Copyright {getFullYear()} - {getFooterCopy(true)}
        </p>
      </footer>
    </div>
  );
}

export default App;

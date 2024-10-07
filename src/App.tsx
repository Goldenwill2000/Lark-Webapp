import React from "react";
import logo from "./logo.svg";
import smth from "./smth.png";
import "./App.css";
import Home from "./pages/home/Home";

function App() {
  return (
    <div className="App">
      <Home />
      <header className="App-header">
        <img src={smth} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

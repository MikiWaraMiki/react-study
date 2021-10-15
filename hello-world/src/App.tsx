import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'components/Greets'
import Greets from "./components/Greets";

function App() {
  const name = 'Patty'
  const grret = (name: string) => <p>Hello, {name ||'Guest'}</p>
  const testN = Math.floor(Math.random() * 10)
  const threshold = 5
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {grret(name)}
        </p>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <p>
          Hello World.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <div>
          { testN > threshold && <p> 'testN' is larger than { threshold } </p>}
          <p>'n' is { testN % 2 === 0 ? 'even' : 'odd'}</p>
        </div>
      </header>
      <Greets name={"Patty"}>
        <span role="img" aria-label="rabbit">hoge</span>
      </Greets>
    </div>
  );
}

export default App;

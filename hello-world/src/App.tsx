import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const name = 'Patty'
  const grret = (name: string) => <p>Hello, {name ||'Guest'}</p>
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
      </header>
    </div>
  );
}

export default App;

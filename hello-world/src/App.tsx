import './App.css';
import { VFC } from 'react';
import Timer from 'containers/Timer';

const App: VFC = () => (
  <div className="container">
    <header>
      <h1>タイマー</h1>
    </header>
    <Timer limit={60} />
  </div>
);

export default App;

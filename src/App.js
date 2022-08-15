import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  return (
    <div className="App">
      <Counter></Counter>

    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(85)
  return (
    <div>
      <h1>Count: {count}</h1>
      <button>Increase</button>
    </div>
  )
}

export default App;


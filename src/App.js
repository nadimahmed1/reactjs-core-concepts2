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
  const [count, setCount] = useState(85);
  // one line work
  const increaseCount = () => setCount(count + 1);

  // multyline work
  // const increaseCount = () => {
  //   const newCount = count + 1;
  //   setCount(newCount);
  // }
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={increaseCount}>Increase</button>
    </div>
  )
}

export default App;


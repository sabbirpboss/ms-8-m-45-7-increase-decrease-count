import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  return (
    <div className="App">
      <h1>Incrase Decrease function</h1>
      {/* <Counter></Counter> */}
    </div>
  );
}

//useEffect
const ExternalUsers = () => {
  return (
    <div className="">
      <h2>External Users</h2>
    </div>
  )
}

const Counter = () => {
  const [count, setCount] = useState(0);
  const increaseCount = () => setCount(count + 1);
  const decreaseCount = () => setCount(count - 1);
  return (
    <div className="">
      <h1>Count: {count}</h1>
      <button onClick={increaseCount}>Increase</button>
      <button onClick={decreaseCount}>Increase</button>
    </div>
  )
}

export default App;

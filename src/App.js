import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      {/* <h1>Incrase Decrease function</h1>
      <Counter></Counter> */}

      <h2>useEffect</h2>
      <ExternalUsers></ExternalUsers>
    </div>
  );
}

//useEffect
const ExternalUsers = () => {
  const [users, setUsers] = useState([]);
  // useEffect( () => {}, [])
  useEffect( () => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data))
  }, [])
  return (
    <div className="">
      <h2>External Users</h2>
      <p>{users.length}</p>
      {
        users.map(user => <User name = {user.name} email = {user.email} phone = {user.phone}></User>)
      }
    </div>
  )
}

const User = (props) => {
  return (
    <div className="container">
      <h2>Name: {props.name}</h2>
      <p>Email: {props.email}</p>
      <p><small>Phone: {props.phone}</small></p>
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

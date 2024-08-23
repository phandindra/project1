import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [count,setCount] = useState(0);
  useEffect(()=>{
 alert("every render");
  },[count]);


  function decrementHandler(){
    setCount( count=>count-1)      
  }
  function incrementHandler(){
    setCount( count=>count+1)
  }
  return (
    <div className="App">
      <header className="App-header">
      <div >
        <button onClick={decrementHandler}>-----</button>
        <span>{count}</span>
        <button onClick={incrementHandler}>+++++</button>
      </div>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
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

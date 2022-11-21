import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
let value = 100
console.log(value)
  return (
    <div className="App">
      
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => {value = value - 1, console.log(value)}}>
          count is {value}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App

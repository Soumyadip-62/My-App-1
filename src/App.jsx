import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import Test from './components/Test'
import './App.css'

function App() {
  const [count, setCount] = useState(100)


  useEffect(() => {
    console.log("clicked");
  }, [count])
  
function substract() {
  setCount(count - 1)
}
  return (
    <div className="App">
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={substract}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    <Test parent={'app'}/>
    </div>
  )
}

export default App

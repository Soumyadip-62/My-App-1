import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import Test from './components/Test'
import PostRequest from './components/PostRequest'
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
      <Test parent={"app"} />
      <PostRequest />
    </div>
  );
}

export default App

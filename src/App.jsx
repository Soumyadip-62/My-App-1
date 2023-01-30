import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import Test from './components/Test'
import PostRequest from './components/PostRequest'
import Navbar from './components/Navbar'
import { Link } from 'react-router-dom'


function App() {
  const [count, setCount] = useState(100)


  useEffect(() => {
    console.log("clicked");
  }, [count])
  
function substract() {
  setCount(count - 1)
}
  return (
    <div className="container-fluid">
      <Navbar />
      <div className="row justify-content-center">
        {" "}
        <Test parent={"app"} />
        
          <li className="nav-item">
            <Link to={"/greeting/sujit"}>
              {" "}
              <a className="nav-link">Sujit</a>
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/greeting/junsume"}>
              {" "}
              <a className="nav-link">Junsume</a>
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/greeting/soumya"}>
              {" "}
              <a className="nav-link">Soumya</a>
            </Link>
          </li>
       
        {/* <PostRequest /> */}
      </div>
    </div>
  );
}

export default App

import React from 'react'
import { useParams } from "react-router-dom";
const Greeting = () => {
    const{name} = useParams()
  return (
    <div className="p-4 card">
      <h3>Greetings: {name}</h3>
    </div>
  );
}

export default Greeting
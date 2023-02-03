import React, { useEffect, useState } from 'react'

const About = () => {
  const [name, setname] = useState('')
  const [namefromSession, setnamefromSession] = useState("");
  

  useEffect(()=>{
    var data = localStorage.getItem("input");
    var data2 = sessionStorage.getItem("input");
   setname(JSON.parse(data));
   setnamefromSession(JSON.parse(data2));
  }, [])

  return (
    <div>
      <h2>name in localStorage : {name.name}</h2>
      {/* <h2>name in SessionStorage : {namefromSession.name}</h2> */}
    </div>
  );
}

export default About


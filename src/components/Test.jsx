import React, { useEffect, useState } from "react";


export default function Test({ parent }) {
const [location, setlocation] = useState(null)

  async function getWheather() {
    const response = await fetch(
      `http://api.weatherstack.com/current?access_key=4c014f491dd8d82a124920e2647a8f61&query=New Delhi`
    );

    const res = await response.json();
    console.log(res.location);
    setlocation(res.location)
  }


  useEffect(() => {
    
  getWheather()
   
  }, [])
  



  return <div>
    <ul>
        <li>
            {/* list all the elements from location object */}

        </li>
    </ul>
  </div>;
}

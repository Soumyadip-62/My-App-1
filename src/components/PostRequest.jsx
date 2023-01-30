import React from 'react'
import { useState } from 'react'
const PostRequest = () => {

    const [title, settitle] = useState('')
    const [userid, setuserid] = useState('')


    function handleChange(event){

        if (event.target.id == "title") {
            settitle(event.target.value)
        }
        else{
            setuserid(event.target.value)
        }
       
    }

    async function setTodos() {

        const data = {
          title:title,
          body: title,
          userId: userid,
        };
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/todos`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: JSON.stringify(data), // body data type must match "Content-Type" header
        }
      );

      const res = await response.json();
      console.log(res);
      // setlocation(res.location)
    }

  return (
    <div>
      <label htmlFor="Title">Title</label>
      <input id="title" type="text" onChange={(event) => handleChange(event)} />
      <label htmlFor="userid">userid</label>

      <input
        id="userid"
        type="text"
        onChange={(event) => handleChange(event)}
      />
      <button className='btn btn-dark' onClick={setTodos}>Submit</button>
    </div>
  );
}

export default PostRequest
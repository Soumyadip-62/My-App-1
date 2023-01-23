import React, { useEffect, useState } from "react";

export default function Test({ parent }) {
  // const [location, setlocation] = useState(null);

  const [todo, settodo] = useState({
    completed: false,
    id: 0,
    title: "title",
    userId: 0,
  });

  const data = {
    title: "todo",
    body: "Body",
    userId: 1,
  };
  

  const getTodos = async () => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/todos/1`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
      }
    );

    const res = await response.json();
    settodo({
      id: res.id,
      title: res.title,
      userId: res.userId,
      completed: res.completed
    })
  };

 

  return (
    <div>
      <button onClick={getTodos}>Click me to get todos</button>

      <h2>{todo.id}</h2>
      <h2>{todo.completed ? "true" : "false"}</h2>
      <h2>{todo.title}</h2>
      <h2>{todo.userId}</h2>



    </div>
  );
}

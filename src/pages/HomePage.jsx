import React, { useState } from "react";
import Navbar from "../components/Navbar";

const HomePage = () => {
  const [input, setinput] = useState("");
  const handleLocalstorage = () => {
    localStorage.setItem("input", JSON.stringify({ name: input }));

    sessionStorage.setItem("input", JSON.stringify({ name: input }));
  };
  return (
    <div>
      <Navbar />

      <input
        type="text"
        value={input}
        onChange={(e) => setinput(e.target.value)}
      />

      <button className="btn btn-primary" onClick={handleLocalstorage}>Save</button>
    </div>
  );
};

export default HomePage;

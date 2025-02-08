import React, { useState } from "react";
import B from "./B";

function A() {
  //States

  // const [state, setstate] = useState("initialstate");
  // const [name, setName] = useState("John");
  // const [password, setPassword] = useState("1234@pass");

  const [inputValue, setInputValue] = useState("");

  const hadleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = () => {
    alert(`Input Value is : ${inputValue}`);
  };

  return (
    <>
      <h1>Hello, you are in A component</h1>
      <B name={inputValue} />

      <label htmlFor="nameID">Enter Name: </label>
      <input
        type="text"
        id="nameID"
        value={inputValue}
        onChange={hadleInputChange}
        placeholder="Enter the Name..."
      />

      <button onClick={handleSubmit}>Submit</button>
    </>
  );
}
export default A;

// var x = 10;
// var y;

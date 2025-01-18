import React from "react";
import C from "./C";

export default function B({ name }) {
  return (
    <React.Fragment>
      <h1>Hello {name}, you are in B component</h1>
      <C name={name}/>
    </React.Fragment>
  );
}

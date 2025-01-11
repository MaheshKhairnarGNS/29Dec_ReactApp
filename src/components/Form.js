import React, { useState } from "react";

export default function Form(props) {
  const [MyText, setMyText] = useState("");

  const showUpperCase = (event) => {
    event.preventDefault(); // Prevent form submission
    console.log("Inside showUpperCase...");
    // setMyText("Clicke on the button");
    // setMyText("New Value");
    console.log("MyText Value:", MyText);
  };

  const textOnChange = (event) => {
    console.log("Value change..");
    setMyText(event.target.value); // Update the state as the user types
  };

  const convertUppercase = (event) => {
    event.preventDefault(); // Prevent form submission
    setMyText(MyText.toUpperCase()); // Convert text to uppercase
    console.log("Uppercase Text:", MyText.toUpperCase());
  };

  const convertLowercase = (event) => {
    event.preventDefault(); // Prevent form submission
    setMyText(MyText.toLowerCase()); // Convert text to lowercase
    console.log("Lowercase Text:", MyText.toLowerCase());
  };

  return (
    <>
      <div className="main-Container">
        <form className="col g-3">
          <div className="row mb-3">
            <label htmlFor="inputEmail3" className="col-sm-1 col-form-label">
              {props.lable1}
            </label>
            <div className="col-sm-4">
              <input
                type="email"
                className="form-control"
                id="inputEmail3"
                autoComplete="email"
              />
            </div>
          </div>
          <div className="row mb-3">
            <label htmlFor="inputPassword3" className="col-sm-1 col-form-label">
              Password
            </label>
            <div className="col-sm-4">
              <input
                type="password"
                className="form-control"
                id="inputPassword3"
                autoComplete="current-password"
              />
            </div>
          </div>

          <div className="mb-3 col-sm-5">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">
              {props.formTitle}
            </label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="5"
              value={MyText}
              onChange={textOnChange}
            ></textarea>
          </div>

          <button
            type="submit"
            className="btn btn-success"
            onClick={showUpperCase}
          >
            Clicked Me
          </button>

          <button className="btn btn-primary" onClick={convertUppercase}>
            Convert to Uppercase
          </button>
          <button className="btn btn-primary" onClick={convertLowercase}>
            Convert to Lowercase
          </button>

          <div>{MyText.length}</div>
          <div>{MyText.split(" ").length}</div>
        </form>
      </div>
    </>
  );
}

import React, { useState, useEffect } from "react";

function MyFunctionComponent() {
  const [count, setCount] = useState(0);

  const incrementFun = () => {
    setCount(count + 1);
    console.log("Coming inside the incrementFun");
  };

  useEffect(() => {
    console.log("Coming inside the useEffect");
  }, []);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={incrementFun}>Increment</button>
    </div>
  );
}

export default MyFunctionComponent;

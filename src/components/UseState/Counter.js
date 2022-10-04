import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const handleChange = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h2>The count is {count}</h2>
      <button onClick={handleChange}>Click Me to Increment</button>
    </div>
  );
}

export default Counter;

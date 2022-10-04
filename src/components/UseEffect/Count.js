import React, { useEffect, useState } from "react";

function Count() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });

  return (
    <div>
      <h2>You clicked {count} times</h2>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}

export default Count;

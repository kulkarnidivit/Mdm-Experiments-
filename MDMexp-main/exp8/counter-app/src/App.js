import React, { useState, useEffect } from "react";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Simple Counter App</h2>
      <h1>{count}</h1>

      <button onClick={() => setCount(count + 1)}>Increment</button>
      &nbsp;&nbsp;
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
}

export default App;
import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  return (
    <div className="App">
      <h1>Counter App</h1>
      <p>Count: {count}</p>
      <div className="buttons">
        <button type="submit" onClick={handleIncrement}>
          Increment
        </button>
        <button type="submit" onClick={handleDecrement}>
          Decrement
        </button>
      </div>
    </div>
  );
}
export default App;

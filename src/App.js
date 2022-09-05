import React, { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  // const decrement = () => {
  //   if (count > 0) {
  //     setCount(count - 1);
  //   }

  const reset = () => {
    setCount(0);
  };

  return (
    <div className="container my-5">
      <div className="card text-center my-5">
        <div className="card-body">
          <h1>React counter</h1>
          <div className="my-5">
            <h2>{count}</h2>
            <button className="btn btn-primary mx-3" onClick={increment}>
              +
            </button>
            <button className="btn btn-danger mx-3" onClick={reset}>
              Reset
            </button>
            <button className="btn btn-success mx-3" onClick={decrement}>
              -
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

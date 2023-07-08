import React from "react";
import { CounterContext } from "./CounterContext";
import { useContext } from "react";

function NewCounter() {
  const { count, increaseCount, decreaseCount, resetCount } =
    useContext(CounterContext);
  return (
    <div>
      <h2>The counting App: </h2>
      <div>
        <h3>{count}</h3>
      </div>

      <div>
        <button onClick={increaseCount}>Increase</button>
        <button onClick={resetCount}>Reset</button>
        <button onClick={decreaseCount}>Decrease</button>
      </div>
    </div>
  );
}

export default NewCounter;

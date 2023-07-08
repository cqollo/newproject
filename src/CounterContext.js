import React, { useState } from "react";
import { useContext, createContext } from "react";

export const CounterContext = createContext();

function ContextProvider(props) {
  const [count, setCount] = useState(0);

  const increaseCount = () => {
    setCount(count + 1);
  };

  const decreaseCount = () => {
    setCount(count - 1);
  };

  const resetCount = () => {
    setCount(0);
  };

  const value = { count, increaseCount, decreaseCount, resetCount };

  return (
    <CounterContext.Provider value={value}>
      {props.children}
    </CounterContext.Provider>
  );
}

export const useUser = () => useContext(CounterContext);

export default ContextProvider;

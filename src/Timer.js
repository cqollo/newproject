import React, { useState, useEffect } from "react";

function Timer() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 50);
    return
  });

  return (
    <div>
      <h2>I've rendered {count} times!</h2>
    </div>
  );
}

export default Timer;

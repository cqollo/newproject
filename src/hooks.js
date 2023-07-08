import React, { useState, useEffect } from "react";
/* import ReactDOM from "react-dom/client"; */

function Car() {
  const [car, setCar] = useState({
    brand: "Ford",
    model: "Mustang",
    year: "1964",
    color: "red",
  });

  const updateColor = () => {
    setCar((pState) => {
      return { ...pState, color: "blue" };
    });
  };

  return (
    <>
      <div>
        <h1>My {car.brand}</h1>
        <p>
          It is a {car.color} {car.model} from {car.year}.
        </p>
        <button type="button" onClick={updateColor}>
          Blue
        </button>
      </div>
    </>
  );
}

export default Car;

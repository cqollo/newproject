import React from "react";
import { useState, useEffect } from "react";

function FakeEcommerce() {
  const [items, setItems] = useState([]);

  const FetchData = () => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setItems(data));
  };

  useEffect(() => {
    FetchData();
  }, []);

  return (
    <h4>
      {items.map(({id, title}) => (
        <ol>
          {id} | {title}
        </ol>
      ))}
    </h4>
  );
}

export default FakeEcommerce;

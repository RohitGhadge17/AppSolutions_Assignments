import React, { useState } from "react";

function Example1() {
  const [car, setCar] = useState({
    brand: "Ford",
    model: "Mustang",
    year: "1964",
    color: "red",
  });

  const updateColor = () => {
    setCar((previousState) => {
      return { ...previousState, color: "blue" };
    });
  };

  return (
    <div>
      <h1>My car brand is {car.brand}</h1>
      <h2>
        It is a {car.color} {car.model} from {car.year}.
      </h2>
      <button type="button" onClick={updateColor}>
        Update Color
      </button>
    </div>
  );
}

export default Example1;

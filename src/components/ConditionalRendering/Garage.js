import React from "react";

function Garage(props) {
  const cars = props.cars;
  return (
    <>
      <h1>Car Garage</h1>
      {cars.length > 0 && <h2>You have {cars.length} cars in your garage.</h2>}
    </>
  );
}

export default Garage;

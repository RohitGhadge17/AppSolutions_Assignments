import React from "react";
import Car from "./Car";

function Garage1() {
  const carInfo = { name: "Ford", model: "Endavour" };

  return (
    <>
      <h1>Who lives in my garage?</h1>
      <Car brand={carInfo} />
    </>
  );
}

export default Garage1;

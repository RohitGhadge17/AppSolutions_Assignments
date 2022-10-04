import React from "react";

function Car(props) {
  return (
    <h2>
      I am a {props.brand.model} and of brand {props.brand.name}
    </h2>
  );
}

export default Car;

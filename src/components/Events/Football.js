import React from "react";

function Football() {
  const shoot = (a) => {
    alert(a);
  };

  return <button onClick={() => shoot("Goal!!")}>Take a shot</button>;
}

export default Football;

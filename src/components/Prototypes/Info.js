import React from "react";
import PropTypes from "prop-types";

const Info = (props) => {
  return (
    <div>
      <h1>
        My name is {props.name} and age is {props.age}
      </h1>
      <p>I am a front-end developer</p>
    </div>
  );
};
Info.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
};
export default Info;

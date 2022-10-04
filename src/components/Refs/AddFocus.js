import React, { useRef } from "react";

const AddFocus = (props) => {
  const inputElement = useRef();

  const focusInput = () => {
    inputElement.current.focus();
  };

  return (
    <div>
      <input type="text" ref={inputElement} />
      <input type="button" value="Click to focus input" onClick={focusInput} />
    </div>
  );
};

export default AddFocus;

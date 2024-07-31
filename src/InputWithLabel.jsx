import React, {useRef, useEffect} from "react";

const InputWithLabel = ({ id, value, onChange, children, autoFocus}) => {
  //ref for input element
  const inputRef = useRef(null);

  //focus the imput element when comp mounts
  useEffect(() => {
    inputRef.current.focus();
  },[] );
  //empty dep. list - effect runs only after initial render

  return (
    <>
      <label htmlFor={id}>{children}</label>
      <input
        id={id}
        type="text"
        name={id}
        value={value}
        onChange={onChange}
        ref={inputRef}
      />
    </>
  );
};

export default InputWithLabel;

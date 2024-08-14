import React, { useEffect, forwardRef} from "react";

const InputWithLabel = forwardRef(({ id, value, onChange, children}, ref) => {


  //focus the imput element when comp mounts
  useEffect(() => {
    if (ref.current) {
      ref.current.focus();  // Focus on the input
    }
    }, [] );  //empty dep. list - effect runs only after initial render

  return (
    <>
      <label htmlFor={id}>{children}</label>
      <input
        id={id}
        type="text"
        name={id}
        value={value}
        onChange={onChange}
        ref={ref}
      />
    </>
  );
});

export default InputWithLabel;

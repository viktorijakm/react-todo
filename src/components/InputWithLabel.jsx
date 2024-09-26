import React, { useEffect, forwardRef} from "react";
import PropTypes from "prop-types";

const InputWithLabel = forwardRef(({ id, value, onChange, className,children}, ref) => {


  //focus the imput element when comp mounts
  useEffect(() => {
    if (ref.current) {
      ref.current.focus();  // Focus on the input
    }
    }, [] );  //empty dep. list - effect runs only after initial render

  return (
    <>
      <label htmlFor={id} className={className}>{children}</label>
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

  InputWithLabel.propTypes = {
    id: PropTypes.string.isRequired,     // id is a required number
    value: PropTypes.string.isRequired,  // value is a required string
    onChange: PropTypes.func.isRequired, // onChange is a required function
    className: PropTypes.string,         // className is an optional string
    children: PropTypes.node.isRequired, // children are required
  };
  
export default InputWithLabel;


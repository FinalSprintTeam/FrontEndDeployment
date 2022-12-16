import React from "react";
import classes from "./Input.module.css";

const Input = React.forwardRef((props, ref) => {
  return (
    // <div className={`${classes.input}`}>
    <div className={props.formControl}>
      <label htmlFor={props.input.id} className="col-form-label">
        {props.label}
      </label>
      <input ref={ref} {...props.input} className="form-control" />
    </div>
  );
});

export default Input;

import React from "react";
import classes from "./Input.module.css";

const InputState = ({ label, input, onChange, formControl }) => {
  return (
    <div className={formControl}>
      {label && 
       <label htmlFor={input.id} className="col-form-label">
       {label}
     </label>
      }
     
      <input
        {...input}
        onChange={(e) => onChange(e.target.value)}
        className="form-control"
      />
    </div>
  );
};

export default InputState;

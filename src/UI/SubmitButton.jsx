import React from "react";

const SubmitButton = ({ label, style, icon }) => {
  return (
    <button className={style.button}>
      <span className={style.icon}>{icon}</span>
      <span> {label}</span>
    </button>
  );
};

export default SubmitButton;
import React from "react";
import "./css/Input.css";

const Input = ({
  label,
  type = "text",
  name,
  value,
  onChange,
  required = false,
  autoComplete = "off",
}) => {
  return (
    <div className="input-group">
      <input
        required={required}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        autoComplete={autoComplete}
        placeholder=" "
        className="input"
      />
      <label className="user-label">{label}</label>
    </div>
  );
};

export default Input;


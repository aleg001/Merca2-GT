import React from "react";

import "../styles/login.css";

const TextInput = ({
  className,
  initValue,
  title,
  password,
  set,
  placeholderText,
}) => {
  password == null || password === false
    ? (password = "text")
    : (password = "password");

  return (
    <div className={className}>
      <h4 className="tituloInput">{title}</h4>
      <input
        onChange={(event) => set(event.target.value)}
        type={password}
        value={initValue}
        placeholder={placeholderText}
      />
    </div>
  );
};

export default TextInput;

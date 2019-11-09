import React, { useEffect, useState } from "react";

const Input = ({ name, value, onChange, form, validations, errors }) => {
  const [validation, setValidation] = useState({ border: "solid black" });
  const [error, setError] = useState("");

  useEffect(() => {
    if (!validations) {
      setValidation({ border: "solid black" });
    } else {
      !validations[name]
        ? setValidation({ border: "1px solid red" })
        : setValidation({ border: "1px solid black" });
      name in errors ? setError(errors[name]) : setError("");
    }
  }, [value]);

  return (
    <div>
      <input name={name} value={value} onChange={onChange} style={validation} />
      <p>
        <small style={{ color: "red" }}>{error}</small>
      </p>
    </div>
  );
};

export default Input;

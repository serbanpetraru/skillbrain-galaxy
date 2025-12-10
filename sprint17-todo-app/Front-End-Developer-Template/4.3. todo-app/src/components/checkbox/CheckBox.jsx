import React, { useState, useEffect } from "react";
import "./Checkbox.css";

const Checkbox = (props) => {
  const [checked, setChecked] = useState(!!props.checked);

  const checkboxId = `checkbox-${Math.random().toString(36).substr(2, 9)}`;
  useEffect(() => {
    setChecked(!!props.checked);
  }, [props.checked]);

  const handleCheckboxChange = (e) => {
    setChecked(e.target.checked);
    if (props.onChange) {
      props.onChange(e.target.checked);
    }
  };

  return (
    <div className="round">
      <input
        id={checkboxId}
        type="checkbox"
        checked={checked}
        onChange={handleCheckboxChange}
      />
      <label
        className={`checkbox ${checked ? "checkbox--active" : ""}`}
        htmlFor={checkboxId}
      ></label>
    </div>
  );
};

export default Checkbox;
import React, { useState } from "react";
import "./newform.css";

const Inputs = (props) => {
  const [focused, setFocused] = useState(false);
  const { label, id, errormessage, onChange, ...inputProps } = props;
  const handlefocus = (e)=>{
    setFocused(true)
  }
  return (
    <div className="myform">
      <label>{label}</label>
      <input
        {...inputProps}
        onChange={onChange}
        onBlur={handlefocus}
        onFocus={() => inputProps.name === "confirmpassword" && setFocused(true)}
        focused={focused.toString()}
      />
      <span>{errormessage}</span>
    </div>
  );
};

export default Inputs;

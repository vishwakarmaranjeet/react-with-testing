import React, { useState } from "react";

const InputBox = () => {
  const [value, setValue] = useState("");
  const onButtonClick = () => {
    console.log(window);
  };
  return <>
    <input type="text" name="name" placeholder="Enter your name" value={value} onChange={(e)=> setValue(e.target.value)} />
    <button onClick={onButtonClick} disabled={value !== "" ? false : true}>Click me</button>
  </>
};
export default InputBox;
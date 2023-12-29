import React, { useState } from "react";

const InputBox = () => {
  const [value, setValue] = useState("");
  return <><input type="text" name="name" placeholder="Enter your name" value={value} onChange={(e)=> setValue(e.target.value)} /></>
};
export default InputBox;
import React, { useState } from "react";

const options = ["India", "USA", "Russia", "Germany"];

function DropDown(){
  const [value, setValue] = useState("");
  function handleSelect(option){
    setValue(option);
  }
  return <>
    <select value={value} onChange={(e)=> handleSelect(e.target.value)}>
        <option value="" disabled>Select an option</option>
        {options.map((item)=> {
            return <option value={item} key={item}>{item}</option>
        })}
    </select>
    <button disabled={value !== "" ? false : true}>Submit</button>
  </>
};

export default DropDown;
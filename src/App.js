import React, { useEffect } from "react";
import axios from 'axios';
import "./App.css";
import { Greet } from "./components/greet/greet";
import InputBox from "./components/Input";
import DropDown from "./components/DropDown";

function App() {
  const checkUserLogin = async () => {
    try {
      const response = await axios.post('https://vxpress.vijayant.in/integration/users/login.json', {
          "user": {
            "email": "ASHIRWAD_API",
            "password": "123456",
            // "consignment_type": "OUTOBOUND-TBB"
          }
      });
      console.log(response.data);
    } catch (err) {
      console.log(err.message);
    }
  };
  return (
    <>
      {/* <br />
      <Greet name="World" /> <br />
      <InputBox /> <br /><br />
      <DropDown /> */}
      <div className="App">
      <button onClick={checkUserLogin}>Call API</button>
      </div>
    </>
  );
}

export default App;

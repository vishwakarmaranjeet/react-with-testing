import "./App.css";
import { Greet } from "./components/greet/greet";
import InputBox from "./components/Input";
import DropDown from "./components/DropDown";

function App() {
  return (
    <>
      <br />
      <Greet name="World" /> <br />
      <InputBox /> <br /><br />
      <DropDown />
      <div className="App">
      </div>
    </>
  );
}

export default App;

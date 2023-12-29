import "./App.css";
import { Greet } from "./components/greet/greet";
import InputBox from "./components/Input";

function App() {
  return (
    <>
      <Greet name="World" />
      <InputBox />
      <div className="App">
      </div>
    </>
  );
}

export default App;

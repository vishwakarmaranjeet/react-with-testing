import "./App.css";
import { Greet } from "./components/greet/greet";

function App() {
  function methodDoesNotExist(){
    throw new Error("Button clicked error");
  }
  return (
    <>
      <Greet name="World" />
      <div className="App">
      <button onClick={() => methodDoesNotExist()}>Break the world</button>
      </div>
    </>
  );
}

export default App;

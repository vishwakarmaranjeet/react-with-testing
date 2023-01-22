import "./App.css";
import { Greet } from "./components/greet/greet";

function App() {
  return (
    <>
      <Greet name="World" />
      <div className="App">
        {/* <header className="App-header"></header> */}
      </div>
    </>
  );
}

export default App;

import logo from "./logo.svg";
import "./App.css";
import CopyToClipboard from "./components/CopyToClipboard";
import PreviousComponent from "./components/PreviousComponent";

function App() {
  return (
    <>
      <CopyToClipboard />
      <br />
      <hr />
      <PreviousComponent />
    </>
  );
}

export default App;

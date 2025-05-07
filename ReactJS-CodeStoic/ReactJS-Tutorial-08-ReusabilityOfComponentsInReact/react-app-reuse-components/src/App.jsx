import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import HelloWorld from "./components/HelloWorld";

function App() {
  return (
    <div className="App">
      <p>
        {" "}
        One can repreate the component as many times one need by copying into
        multiple times
      </p>
      <HelloWorld />
      <HelloWorld />
      <HelloWorld />
      <HelloWorld name="Harini" />
      <HelloWorld name="Srinivas" />
    </div>
  );
}

export default App;

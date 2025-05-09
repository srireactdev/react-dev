import reactLogo from "./assets/react.svg";
import "./App.css";
import ConditionalComponent from "./components/ConditionalComponent";

function App() {
  return (
    <div className="App">
      <div>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <div>
        App Works
      </div>
      <div style={{ border: '2px dashed blue', borderRadius: '5px', padding: '10px' }}>
      The Condition is True
        <ConditionalComponent isCondition="true" />
      </div>
      <div style={{ border: '2px dashed blue', borderRadius: '5px', padding: '10px' }}>
        The Condition is False
        <ConditionalComponent isCondition="false" />
      </div>
    </div>
  );
}

export default App;

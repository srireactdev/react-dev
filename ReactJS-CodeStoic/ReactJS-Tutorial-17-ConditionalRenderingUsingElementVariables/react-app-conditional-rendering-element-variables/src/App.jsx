import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import ConditionalComponent from './components/ConditionalComponents'
import ConditionalComponentsUsingTernaryOperation from './components/ConditionalComponentsUsingTernaryOperation'
import ConditionalComponentsUsingTernaryOperationComponents from './components/ConditionalComponentsUsingTernaryOperationComponents'

function App() {
  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
     <div>
      App Works
     </div>
     <div>
     <ConditionalComponent isDisplay = {true}/>
     </div>
     <div>
     <ConditionalComponent isDisplay = {false}/>
     </div>
     <div>
     <ConditionalComponentsUsingTernaryOperation isDisplay = {false}/>
     </div>
     <div>
     <ConditionalComponentsUsingTernaryOperationComponents isDisplay = {false}/>
     </div>
    </div>
  )
}

export default App

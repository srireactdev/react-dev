import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Hello from './components/Hello'

function App() {

  return (
    <div className="App">
      <Hello name="Harini" message="Good Morning!"/>
      <Hello name="Srinivas" message="Hi There" />
    </div>
  )
}

export default App

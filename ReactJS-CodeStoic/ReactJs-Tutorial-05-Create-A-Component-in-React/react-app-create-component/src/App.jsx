import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Hello from './components/Hello'


function App() {
  return (
    <div className="App">
      <h1>App Component Works</h1>
      <Hello/>
      Can be used using single closing tag or Opening and closing Component tag 
      <Hello></Hello>
    </div>
  )
}

export default App

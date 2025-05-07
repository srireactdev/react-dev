import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import HelloWorld from './components/HelloWorld'

function App() {
  return (
    <div className="App">
      <HelloWorld name="Srinivas" message="Hi there!" emoji="❤️"/>
      <HelloWorld  message="Hi there!" emoji="❤️" name="Harini"/>
    </div>
  )
}
export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from './components/button'
function App() {

/**
 * Challenge: 
 * 
 * Build a Button component in a separate file.
 * (For styling purposes, make sure it renders an HTML <button> element)
 * Your button component should take a `text` prop
 */
  return (
    <main>
      <Button text= 'Click here'/>
  </main>
  )
}

export default App

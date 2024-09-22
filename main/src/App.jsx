import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from './components/button'
import { FaAlignLeft, FaMoneyBill } from "react-icons/fa";
/**
 * Challenge: Add an onClick handler to the Button
 * component instance (the one on this page). Then
 * make whatever changes you need for it to actually
 * work.
 * 
 * Clicking the button should log "Logging in..." 
 * to the console.
 */
function logger(){
  console.log('logging in');
  
}
function App() {
  return (
    <main>
      <Button onClick={logger} style={{color:'green'}}>  
      <FaMoneyBill/>
         Buy now  
         </Button>

  </main>
  )
}

export default App

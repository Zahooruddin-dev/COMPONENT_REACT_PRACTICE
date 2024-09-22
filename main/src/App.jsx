import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from './components/button'
import { FaAlignLeft, FaMoneyBill } from "react-icons/fa";

function App() {
  return (
    <main>
      <Button 
      style={{color:'green'}}
      size='sm'
      >  
      <FaMoneyBill/>
         Buy now  
         </Button>

  </main>
  )
}

export default App

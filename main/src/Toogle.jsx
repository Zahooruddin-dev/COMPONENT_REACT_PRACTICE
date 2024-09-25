/**
 * Challenge:
 * 
 * 1. Create a Toggle component that initializes its own boolean state.
 * 2. Create a function called `toggle` in that component that flips the 
 *    boolean when the function runs.
 * NOTE: Don't worry about rendering anything yet
 */

import React from "react"

export default function Toggle({children}) {

  const[booleanStates, setBooleanStates] = React.useState(true)
  function toggling()
{
  setBooleanStates(prevState=>!prevState)
}
return booleanStates && children
}
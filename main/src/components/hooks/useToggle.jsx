import React, { useEffect } from "react";
import useEffectOnUpdate from "./useEffectOnUpdate";
/**
 * Challenge:
 * 1. Pass a second parameter called `onToggle` to useToggle.
 *    Give it a "noop" function `() => {}` as a default.
 * 2. Think: how can we call this `onToggle` function any time
 *    `on` changes, but NOT on the first render? 🤔
 */export default function useToggle({
  initialValue = false,
  onToggle = () => { }
}) {
  const [on, setOn] = useState(initialValue)

  function toggle() {
      setOn(prevOn => !prevOn)
  }
  
  useEffectOnUpdate(onToggle, [on])

  return [on, toggle]
}
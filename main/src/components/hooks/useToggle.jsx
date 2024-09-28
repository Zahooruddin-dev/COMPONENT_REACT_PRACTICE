/**
 * Create the beginnings of the useToggle custom hook!
 * 
 * 1. Create a function called useToggle(). Skip the
 *    parameters for now. (We'll come back to that)
 * 2. Bring the useState and toggle function from
 *    our Toggle component into this hook
 * 3. Add the missing import (React)
 * 4. RETURN from this function an array with `on` as
 *    the first parameter and `toggle` as the second
 *    parameter.
 * 5. Add the missing import in Toggle.js
 */
import React from "react";
export default function useToggle() {
	const [on, setOn] = React.useState(true);

	function toggle() {
		setOn((prevOn) => !prevOn);
		console.log('Toggled');
	}
  return[on,toggle]
}

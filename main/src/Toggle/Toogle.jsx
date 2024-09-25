import React from 'react';
import { createContext } from 'react';
export const outside = createContext();

export default function Toggle({ children }) {
	/**
	 * Challenge: set up context!
	 * Reminder of the steps:
	 * 1. Create a new context (outside the component, but in this file)
	 * 2. Export that context instance from the file so we
	 *    can use it eleswhere
	 * 3. Use the Context Provider to wrap the `children` returned
	 *    from this Toggle component
	 * 4. Pass the state values to the context value prop for access
	 *    from child components later on
	 */

	const [booleanStates, setBooleanStates] = React.useState(true);
	function toggling() {
		setBooleanStates((prevState) => !prevState);
	}
	return booleanStates && children;
}

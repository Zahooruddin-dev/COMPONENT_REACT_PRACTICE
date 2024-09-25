import React from 'react';
import { createContext } from 'react';
export const ToggleContext = createContext(booleanStates);

export default function Toggle({ children }) {


	const [booleanStates, setBooleanStates] = React.useState(true);
	function toggling() {
		setBooleanStates((prevState) => !prevState);
	}
	return (
		<>
		<ToggleContext.Provider value={{booleanStates,toggling}}>
			{children}
		</ToggleContext.Provider>
		</>
	)
}

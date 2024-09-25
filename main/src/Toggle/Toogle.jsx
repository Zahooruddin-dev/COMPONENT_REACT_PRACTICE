import React from 'react';

export default function Toggle({ children }) {
	const [booleanStates, setBooleanStates] = React.useState(true);
	function toggling() {
		setBooleanStates((prevState) => !prevState);
	}
	return booleanStates && children;
}

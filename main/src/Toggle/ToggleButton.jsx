import React from 'react';
import { ToggleContext } from './Toogle';
export default function ToggleButton({ children }) {
	const { toggle } = React.useContext(ToggleContext);

	return (
		<ToggleContext.Provider>
			<div onClick={toggling}>{children}</div>
		</ToggleContext.Provider>
	);
}

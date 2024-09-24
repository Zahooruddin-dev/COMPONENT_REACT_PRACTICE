import React from 'react';
 
export const MenuContext = React.createContext();

export default function Menu({ children }) {
	const [open, setOpen] = React.useState(true);

	function toggle() {
		console.log('toggle');

		setOpen((prevOpen) => !prevOpen);
	}
	return (
		<MenuContext.Provider value={true}>
			<div className='menu'>{children}</div>
		</MenuContext.Provider>
	);
}

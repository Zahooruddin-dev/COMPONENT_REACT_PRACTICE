import React from 'react';

export default function Menu({ children }) {
	return (
		<MenuContext.Provider>
			<div className='menu'>{children}</div>
		</MenuContext.Provider>
	);
}


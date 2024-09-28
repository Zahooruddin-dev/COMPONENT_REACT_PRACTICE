import React from 'react';
import useToggle from '../hooks/useToggle';
export default function Menu({ children,onOpen }) {
	    
     const [on,toggle]=useToggle()
	return (
			<div className='menu'>{children}</div>
            
            
	);
}


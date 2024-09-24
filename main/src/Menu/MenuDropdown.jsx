import React from 'react';

export default function MenuDropdown({ children, open }) {
  console.log(open);
  
	return open ?(
 <div className='menu-dropdown'>
      {children}
      </div>):null
}
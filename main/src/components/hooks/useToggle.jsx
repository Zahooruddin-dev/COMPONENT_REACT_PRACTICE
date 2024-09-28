import React from "react";
export default function useToggle() {
	const [on, setOn] = React.useState(true);

	function toggle() {
		setOn((prevOn) => !prevOn);
		console.log('Toggled');
	}
  return[on,toggle]
}

import React from "react"
const ToggleContext = React.createContext();
export default function Toggle({ children, onToggle }) {

	const [on, setOn] = React.useState(true);
	const firstRender = React.useRef(true)


	function toggle() {
		setOn((prevOn) => !prevOn);
		console.log('Toggled');
	}
	React.useEffect(() => {
		if(!firstRender.current){
			onToggle()
		}
		else{
			firstRender.current=false
		}

}, [on])

	return (
		<ToggleContext.Provider value={{ on, toggle }}>
			{children}
		</ToggleContext.Provider>
	);
}

export { ToggleContext };

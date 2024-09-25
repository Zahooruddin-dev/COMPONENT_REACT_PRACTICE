import React from 'react';
import './App.css';
import Toggle from './Toggle/index';
import { BsStar, BsStarFill } from "react-icons/bs"

function App() {
	return (
		<>
			<Toggle>
				<Toggle.Button>
				<Toggle.On>
				<BsStarFill className="star filled" /> 
				</Toggle.On>
				<Toggle.Off>
				<BsStar className="star "/>
				</Toggle.Off>
				</Toggle.Button>
	
			</Toggle>
		</>
	);
}

export default App;

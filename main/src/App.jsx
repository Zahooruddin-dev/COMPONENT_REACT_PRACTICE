import React from 'react';
import './App.css';
import Toggle from './components/Toggle/index';
import { BsStar, BsStarFill } from "react-icons/bs"
import Menu from './components/Menu/index';
import MenuButton from './components/Menu/MenuButton';
import MenuDropdown from './components/Menu/MenuDropdown';
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
			<Menu>
				<Menu.Button>		Menu		</Menu.Button>

				<Menu.Dropdown>
					<Menu.Item>F1</Menu.Item>
					<Menu.Item>F2</Menu.Item>
					<Menu.Item>F3</Menu.Item>
					<Menu.Item>F4</Menu.Item>

				</Menu.Dropdown>
			</Menu>
		</>
	);
}

export default App;

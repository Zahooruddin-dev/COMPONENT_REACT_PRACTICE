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
			<Toggle>
			<Menu>
			<Toggle.Button>
			<Menu.Button>Menu</Menu.Button>
			</Toggle.Button>
			<Toggle.On>
				<Menu.Dropdown>
					<Menu.Item>Home</Menu.Item>
					<Menu.Item>About</Menu.Item>
					<Menu.Item>Resume</Menu.Item>
					<Menu.Item>Project</Menu.Item>
				</Menu.Dropdown>
				</Toggle.On>

			</Menu>
			</Toggle>

		</>
	);
}

export default App;

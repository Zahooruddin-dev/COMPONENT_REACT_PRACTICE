import React from 'react';
import './App.css';
import Toggle from './components/Toggle/index';
import Menu from './components/Menu/index';
import Star from './components/star';
function App() {
	return (
		<>
		<Star></Star>
			<br />
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

import React from 'react';
import './App.css';
import Menu from './components/Menu/index';
import Star from './components/star';
function App() {


	return (
		<>
			<Star onChange={() => console.log('hey')}/>
			<br />
			<Menu onOpen={() => console.log('hey')}>
				<Menu.Button>Menu</Menu.Button>

				<Menu.Dropdown>
					<Menu.Item>Home</Menu.Item>
					<Menu.Item>About</Menu.Item>
					<Menu.Item>Resume</Menu.Item>
					<Menu.Item>Project</Menu.Item>
				</Menu.Dropdown>
			</Menu>
		</>
	);
}

export default App;

import React from 'react';
import './App.css';
import Toggle from './components/Toggle/index';
import Menu from './components/Menu/index';
import Star from './components/star';
function App() {
	/**
	 * Challenge:
	 * Move other Toggle logic to be composed with the Menu
	 * components internally, so the person using our Menu
	 * component never needs to touch the generic Toggle at all.
	 */

	return (
		<>
			<Star></Star>
			<br />
			<Menu>
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

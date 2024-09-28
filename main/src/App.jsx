import React from 'react';
import './App.css';
import Menu from './components/Menu/index';
import Star from './components/star';
import Toggle from './components/Toggle/index';
function App() {
	
	return (
		<>
			{/* <Star onChange={() => {}} />
			<br />
			<Menu onOpen={() => console.log('toggle')}>
				<Menu.Button>Menu</Menu.Button>

				<Menu.Dropdown>
					<Menu.Item>Home</Menu.Item>
					<Menu.Item>About</Menu.Item>
					<Menu.Item>Resume</Menu.Item>
					<Menu.Item>Project</Menu.Item>
				</Menu.Dropdown>
			</Menu> */}
			       <Toggle>
        <Toggle.Button>
          <Toggle.On>
            <div className="box filled"></div>
          </Toggle.On>
          <Toggle.Off>
            <div className="box"></div>
          </Toggle.Off>
        </Toggle.Button>
      </Toggle>
		</>
	);
}
/**
 * Challenge: 
 * Part 1: 
 * Create a ToggleDisplay component and attach
 * it to Toggle as Toggle.Display.
 * 
 * It should grab the `on` value from the Toggle context
 * and render children by calling children as a function, 
 * passing the `on` value to it. (E.g. children(on)).
 */
export default App;

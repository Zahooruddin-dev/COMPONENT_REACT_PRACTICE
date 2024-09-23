import './App.css';
import Menu from './Menu/Menu';
import MenuButton from './Menu/MenuButton';
import MenuDropdown from './Menu/MenuDropdown';/**
  /**
   * 1. MenuDropdown should render children instead of items
   * 2. MenuItem (new component you need to create) should also
   *    render children. Grab the <div className="menu-item">
   *    from MenuDropdown before deleting it if you want to be
   *    lazy :)
   * 3. Map over the `sports` array inside MenuDropdown in this
   *    file and render a MenuItem for each sport in the array
   */
function App() {
	return (
		<>
			<Menu>
				<MenuButton>Sports</MenuButton>
				<MenuDropdown
					items={['Tennis', 'Pickleball', 'Racquetball', 'Squash']}
				></MenuDropdown>
			</Menu>
		</>
	);
}

export default App;

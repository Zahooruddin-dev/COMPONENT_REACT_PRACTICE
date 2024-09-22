export default function Button(props) {

	let classNaam;

	if (props.size === 'sm') {
		console.log('sm');
		classNaam = 'button-small';
	} else if (props.size === 'lg') {
		classNaam = 'button-large';
	}

	return <button className={classNaam}>{props.children}</button>;
}

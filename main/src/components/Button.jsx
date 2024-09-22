import classNames from "classnames";
export default function Button({className, children, size, ...rest }) {
	let sizeClass =size ? `button-${size}` : "";

    /**
     * Challenge: See if you can fix the problem with the
     * conflicting `className` props. Doesn't need to be
     * elegant, just see if you can get the button to be
     * both large AND with green text
     */
    const allClasses= classNames(sizeClass, className)
    console.log(allClasses);
    
	return (
    <button className={allClasses} {...rest}>
			{children}
		</button>
	);
}

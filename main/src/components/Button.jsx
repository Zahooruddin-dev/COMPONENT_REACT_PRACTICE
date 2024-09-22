import classNames from "classnames";
export default function Button({variant,className, children, size, ...rest }) {
	let sizeClass =size ? `button-${size}` : "";
  let variants
  if(variant ==='success'){
    variants='success'
  }
  if(variant ==='warning'){
    variants='warning'
  }
  if(variant ==='danger'){
    variants='danger'
  }
  console.log(variants);
  
    /**
     * Challenge: 
     * 
     * Accept a `variant` prop and style the Button component
     * accordingly. The values can be `success`, `warning`, or `danger`. 
     * Check the Figma design for the specific colors to be used for each
     * variant.
     */
    const allClasses= classNames(sizeClass, className, variants)
    console.log(allClasses);
    
	return (
    <button className={allClasses} {...rest}>
			{children}
		</button>
	);
}

import React from 'react'

const NavButton = props => (	
	<a className="NavButton" 
	href={`/${props.toPage}`} > 
		<li >
			{props.text}
		</li>
	</a>		
	
);

export default NavButton;

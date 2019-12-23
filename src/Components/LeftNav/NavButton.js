import React from 'react';

import { Link } from "react-router-dom";

const NavButton = props => (
	<Link className="NavButton"  to={`/${props.toPage}`} >
		<li >
			{props.text}
		</li>
	</Link>		
);

export default NavButton;

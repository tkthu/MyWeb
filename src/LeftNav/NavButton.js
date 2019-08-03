import React from 'react'

const NavButton = props => (	
	<li className="NavButton"
	onClick={()=>{
			const target ={toPage:props.toPage};
			const e = {target};
			props.onClickHandler(e)						
		}
	}>
		{props.text}
	</li>
);

export default NavButton;

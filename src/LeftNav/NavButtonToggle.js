import React from 'react'
import NavButton from './NavButton.js'

const NavButtonToggle = props => (
	<div className="NavButtonToggle">
		<li >
			{props.text}
			<div className="spacer" />
			<img src="/images/arrowIcon.png" />
		</li>
		<ul className="ToggleItem">				
			<NavButton text="Drawing" toPage="art" onClickHandler={props.onClickHandler} />
			<NavButton text="Code" toPage="code" onClickHandler={props.onClickHandler}/>
		</ul>

	</div>
	
);

export default NavButtonToggle;
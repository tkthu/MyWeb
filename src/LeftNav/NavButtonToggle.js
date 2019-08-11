import React from 'react';
import NavButton from './NavButton.js';

import ImgComp from "../images/ImgComp.js";

const NavButtonToggle = props => (
	<div className="NavButtonToggle">
		<li >
			{props.text}
			<div className="spacer" />
			<img src={ImgComp["arrowIcon"]} />
		</li>
		<ul className="ToggleItem">				
			<NavButton text="Drawing" toPage="drawing" onClickHandler={props.onClickHandler} />
			<NavButton text="Project" toPage="project" onClickHandler={props.onClickHandler}/>
		</ul>

	</div>
	
);

export default NavButtonToggle;
import React from 'react'
import WorkIcon from './WorkIcon.js'

import './HomePage.css';

const HomePage = props => (	
	<div className="PanelContent HomePage">
		<h1>MY PROUDEST WORK</h1>
		<img className="fancyHorLine" src="/images/fancyHorLine.jpg" />
		<div className="WorkItem">
	    	<WorkIcon imgSrc="/images/artIcon.png" toPage="art" onClickHandler={props.onClickHandler} />
	    	<WorkIcon imgSrc="/images/codingIcon.png" toPage="code" onClickHandler={props.onClickHandler} />    
	    </div>
	</div>
);

export default HomePage;

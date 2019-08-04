import React from 'react';
import WorkIcon from './WorkIcon.js';

import ImgComp from "../images/ImgComp.js";

import './HomePage.css';

const HomePage = props => (	
	<div className="PanelContent HomePage">
		<h1>MY PROUDEST WORK</h1>
		<img className="fancyHorLine" src={ImgComp["fancyHorLine"]} />
		<div className="WorkItem">
	    	<WorkIcon imgSrc="artIcon" toPage="art" onClickHandler={props.onClickHandler} />
	    	<WorkIcon imgSrc="codingIcon" toPage="code" onClickHandler={props.onClickHandler} />    
	    </div>
	</div>
);

export default HomePage;

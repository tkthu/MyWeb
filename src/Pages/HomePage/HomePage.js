import React from 'react';
import WorkIcon from '../../Components/WorkIcon.js';
import ImgComp from "../../Components/images/ImgComp.js";

import './HomePage.css';

const HomePage = props => (		
	<div className="PanelContent HomePage ">
		<h1>STUFF I MADE</h1>
		<img className="LineBreak" src={ImgComp["fancyHorLine"]} />
		<div>
	    	<WorkIcon imgSrc="artIcon" toPage="digitalArt" onClickHandler={props.onClickHandler} />
	    	<WorkIcon imgSrc="codingIcon" toPage="project" onClickHandler={props.onClickHandler} />    
	    </div>
	</div>
	
);

export default HomePage;

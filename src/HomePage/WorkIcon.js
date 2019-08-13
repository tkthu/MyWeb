import React from 'react';

import { Link } from "react-router-dom";

import ImgComp from "../images/ImgComp.js";

const WorkIcon = props => (	
	<Link className="WorkIcon"
		style={{margin:"20px"}} 
		to={`MyWeb/${props.toPage}`}
	>
		<img src={ImgComp[props.imgSrc]} />
	</Link>	
);

export default WorkIcon;

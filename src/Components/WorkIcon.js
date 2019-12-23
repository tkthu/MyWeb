import React from 'react';
import { Link } from "react-router-dom";
import ImgComp from "./images/ImgComp.js";

const WorkIcon = props => (	
	<Link className="WorkIcon"
		style={{margin:"30px"}} 
		to={`/${props.toPage}`}
	>
		<img src={ImgComp[props.imgSrc]} />
	</Link>	
);

export default WorkIcon;

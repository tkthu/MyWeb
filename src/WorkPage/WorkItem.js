import React from 'react';

import { Link } from "react-router-dom";

import ImgWorkComp from "../images/work/ImgWorkComp.js";

const WorkItem = props => {
	return(	
		<div className="WorkItem" >
			<Link to={`${props.url}/${props.WorkDetail.id}`} >
				<img src={ImgWorkComp[props.WorkDetail.thumbnail]} />
				<div className="Overlay" />
				<div className="OverlayName">{props.WorkDetail.title}</div>
			</Link>	
		</div>
	);
}

export default WorkItem;

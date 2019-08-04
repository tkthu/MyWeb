import React from 'react';

import ImgWorkComp from "../images/work/ImgWorkComp.js";

const WorkItem = props => {
	return(	
		<div className="WorkItem" onClick={()=>{
				const target ={toPage:props.toPage,showWork:props.WorkDetail.id};
				const e = {target};
				props.onClickHandler(e)						
			}
		}>
			<img src={ImgWorkComp[props.WorkDetail.thumbnail]} />
			<div className="Overlay" />
			<div className="OverlayName">{props.WorkDetail.title}</div>
			
		</div>
	);
}

export default WorkItem;

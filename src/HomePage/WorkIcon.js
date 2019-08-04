import React from 'react';

import ImgComp from "../images/ImgComp.js";

const WorkIcon = props => (	
	<button className="WorkIcon"
		style={{margin:"20px"}} 
		onClick={()=>{
			const target ={toPage:props.toPage};
			const e = {target};
			props.onClickHandler(e)						
		}
	}>
		<img src={ImgComp[props.imgSrc]} />
	</button>	
);

export default WorkIcon;

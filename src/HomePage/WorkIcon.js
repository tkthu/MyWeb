import React from 'react'

const WorkIcon = props => (	
	<button className="WorkIcon"
		style={{margin:"20px"}} 
		onClick={()=>{
			const target ={toPage:props.toPage};
			const e = {target};
			props.onClickHandler(e)						
		}
	}>
		<img src={props.imgSrc} />
	</button>	
);

export default WorkIcon;

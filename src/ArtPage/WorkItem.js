import React from 'react'

const WorkItem = props => {
	let srcImage = '/images/art/' + props.WorkDetail.fileName
	return(	
		<div className="WorkItem" onClick={()=>{
				const target ={toPage:props.toPage,showWork:props.WorkDetail.id};
				const e = {target};
				props.onClickHandler(e)						
			}
		}>
			<img src={srcImage} />
			<div className="Overlay" />
			<div className="OverlayName">{props.WorkDetail.title}</div>
			
		</div>
	);
}

export default WorkItem;

import React from 'react'

const InfoSection = props => {
	return(	
		<div className="InfoSection">
			<h2 className="title">{props.WorkDetail.title}</h2>
			<div className="descriptionTitle">
				<h3>Description</h3>
				<div className="spacer" />
				<h6>Published: {props.WorkDetail.published}</h6>
			</div>
			<p>{props.WorkDetail.description}</p>
		</div>
	);
}

export default InfoSection;
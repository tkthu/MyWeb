import React from 'react'

const InfoSection = props => {
	return(	
		<div className="InfoSection">
			<h2 className="title">{props.InfoDetail.title}</h2>
			<div className="descriptionTitle">
				<h3>Description</h3>
				<div className="spacer" />
				<h6>Published: {props.InfoDetail.published}</h6>
			</div>
			<p>{props.InfoDetail.description}</p>
		</div>
	);
}

export default InfoSection;
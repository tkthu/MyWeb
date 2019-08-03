import React from 'react'

const InfoSection = props => {
	return(	
		<div className="InfoSection">
			<h2 className="title">{props.ArtDetail.title}</h2>
			<div className="descriptionTitle">
				<h3>Description</h3>
				<div className="spacer" />
				<h6>Published: {props.ArtDetail.published}</h6>
			</div>
			<p>{props.ArtDetail.description}</p>
		</div>
	);
}

export default InfoSection;
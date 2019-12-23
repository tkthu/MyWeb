import React from 'react'

const LinkSection = props => {
	return(	
		<div className="LinkSection">
			<h6 className="title">{props.WorkDetail.link.title}</h6>
			<a href={props.WorkDetail.link.url}>{props.WorkDetail.link.url}</a>
		</div>
	);
}

export default LinkSection;
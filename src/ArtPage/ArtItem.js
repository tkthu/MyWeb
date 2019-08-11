import React from 'react';

import { Link } from "react-router-dom";

import ImgArtComp from "../images/art/ImgArtComp.js";

const ArtItem = props => {
	return(
		<div className="ArtItem" >
			<Link to={`${props.url}/${props.ArtDetail.id}`} >
				<img src={ImgArtComp[props.ArtDetail.fileName]} />
				<div className="Overlay" />
				<div className="OverlayName">{props.ArtDetail.title}</div>
			</Link>					
		</div>
	);
}

export default ArtItem;

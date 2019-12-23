import React from 'react';
import { Link } from "react-router-dom";
import ImgArtComp from "./images/art/ImgArtComp.js";
import ImgWorkComp from "./images/work/ImgWorkComp.js";

const Thumbnail = props => {
	let image = ImgWorkComp[props.InfoDetail.thumbnail]
	if(props.url=="/digitalArt")
		image = ImgArtComp[props.InfoDetail.fileName]
		
	return(
		<div className="Thumbnail" >
			<Link to={`${props.url}/${props.InfoDetail.id}`} >
				<img src={image} />
				<div className="Overlay" />
				<div className="OverlayName">{props.InfoDetail.title}</div>
			</Link>					
		</div>
	);
}

export default Thumbnail;

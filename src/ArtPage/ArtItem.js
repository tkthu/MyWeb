import React from 'react';

import ImgComp from "../images/art/ImgArtComp.js";

const ArtItem = props => {
	return(	
		<div className="ArtItem" onClick={()=>{
				const target ={toPage:props.toPage,showWork:props.ArtDetail.id};
				const e = {target};
				props.onClickHandler(e)						
			}
		}>
			<img src={ImgComp[props.ArtDetail.fileName]} />
			<div className="Overlay" />
			<div className="OverlayName">{props.ArtDetail.title}</div>
			
		</div>
	);
}

export default ArtItem;

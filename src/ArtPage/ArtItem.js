import React from 'react'

const ArtItem = props => {
	let srcImage = '/images/art/' + props.ArtDetail.fileName
	return(	
		<div className="ArtItem" onClick={()=>{
				const target ={toPage:props.toPage,showWork:props.ArtDetail.id};
				const e = {target};
				props.onClickHandler(e)						
			}
		}>
			<img src={srcImage} />
			<div className="Overlay" />
			<div className="OverlayName">{props.ArtDetail.title}</div>
			
		</div>
	);
}

export default ArtItem;

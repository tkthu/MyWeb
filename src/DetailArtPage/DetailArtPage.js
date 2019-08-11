import React from 'react';
import ArtList from '../ArtPage/ArtList.json';
import InfoSection from './InfoSection.js';

import ImgComp from "../images/ImgComp.js";
import ImgArtComp from "../images/art/ImgArtComp.js";


import './DetailArtPage.css';

const DetailArtPage = props => {
	let ArtDetail = ArtList.database.filter((ArtDetail)=>ArtDetail.id===props.currentWork)
	return(	
		<div className="PanelContent DetailArtPage">
			<img className="Image" src={ImgArtComp[ArtDetail[0].fileName]} />
			<img className="LineBreak" src={ImgComp["fancyHorLine"]} />	
			<InfoSection ArtDetail={ArtDetail[0]}/>
		</div>
	);
}

export default DetailArtPage;


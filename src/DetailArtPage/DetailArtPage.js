import React from 'react';
import ArtList from '../ArtPage/ArtList.json';
import InfoSection from './InfoSection.js';

import ImgComp from "../images/ImgComp.js";
import ImgArtComp from "../images/art/ImgArtComp.js";

import Slider from '../Slider/Slider.js';

import './DetailArtPage.css';

const DetailArtPage = ({match}) => {
	let ArtDetail = ArtList.database.filter((ArtDetail,id) => id == match.params.id)

	return(	
		<div className="DetailArtPage">
			<img className="Image" src={ImgArtComp[ArtDetail[0].fileName]} />
			<img className="LineBreak" src={ImgComp["fancyHorLine"]} />	
			<InfoSection ArtDetail={ArtDetail[0]}/>
			
			<Slider currentPage="DetailArtPage" url="/drawing" />
		</div>
	);
}

export default DetailArtPage;


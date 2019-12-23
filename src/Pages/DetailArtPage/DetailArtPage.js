import ArtList from '../../Database/ArtList.json';
/*-------------------------------------------------*/
import React from 'react';
import InfoSection from '../../Components/InfoSection.js';
import ImgComp from "../../Components/images/ImgComp.js";
import ImgArtComp from "../../Components/images/art/ImgArtComp.js";
import Slider from '../../Components/Slider/Slider.js';

import './DetailArtPage.css';

const DetailArtPage = ({match}) => {
	let ArtDetail = ArtList.database.filter((ArtDetail,id) => id == match.params.id)

	return(	
		<div id="DetailArtPage">
			<img id="Image" src={ImgArtComp[ArtDetail[0].fileName]} />
			<img className="LineBreak" src={ImgComp["fancyHorLine"]} />	
			<InfoSection InfoDetail={ArtDetail[0]}/>
			
			<Slider currentPage="DetailArtPage" url="/digitalArt" />
		</div>
	);
}

export default DetailArtPage;


import WorkList from '../../Database/WorkList.json';
/*-------------------------------------------------*/
import React from 'react';
import "../../../node_modules/video-react/dist/video-react.css";
import ImgComp from "../../Components/images/ImgComp.js";
import ImgWorkComp from "../../Components/images/work/ImgWorkComp.js";
import Slider from '../../Components/Slider/Slider.js';
import InfoSection from '../../Components/InfoSection.js';
import LinkSection from '../../Components/LinkSection.js';
import { Player } from 'video-react';

import './DetailWorkPage.css';

const DetailWorkPage = ({match}) => {
	let WorkDetail = WorkList.database.filter((WorkDetail,id) => id == match.params.id)

	return(	
		<div className="DetailWorkPage">
			<Player
				playsInline
				poster="/assets/poster.png"
				src={ImgWorkComp[WorkDetail[0].fileName]}
			/>
			<img className="LineBreak" src={ImgComp["fancyHorLine"]} />	
			<InfoSection InfoDetail={WorkDetail[0]}/>
			<hr />
			<LinkSection  WorkDetail={WorkDetail[0]}/>
			
			<Slider currentPage="DetailWorkPage" url="/project" />
		</div>
	);
}

export default DetailWorkPage;

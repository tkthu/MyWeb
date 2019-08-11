import React from 'react';
import WorkList from '../WorkPage/WorkList.json';
import InfoSection from './InfoSection.js';

import LinkSection from './LinkSection.js';

import ImgComp from "../images/ImgComp.js";
import ImgWorkComp from "../images/work/ImgWorkComp.js";

import { Player } from 'video-react';
import "../../node_modules/video-react/dist/video-react.css";

import Slider from '../Slider/Slider.js';

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
			<InfoSection WorkDetail={WorkDetail[0]}/>
			<hr />
			<LinkSection  WorkDetail={WorkDetail[0]}/>
			
			<Slider currentPage="DetailWorkPage" url="/project" />
		</div>
	);
}

export default DetailWorkPage;

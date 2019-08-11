import React from 'react';
import WorkList from '../WorkPage/WorkList.json';
import InfoSection from './InfoSection.js';
import LinkSection from './LinkSection.js';

import { Player } from 'video-react';
import "../../node_modules/video-react/dist/video-react.css";

import ImgComp from "../images/ImgComp.js";
import ImgWorkComp from "../images/work/ImgWorkComp.js";

import './DetailWorkPage.css';

const DetailWorkPage = props => {
	let WorkDetail = WorkList.database.filter((WorkDetail)=>WorkDetail.id===props.currentWork)
	return(	
		<div className="PanelContent DetailWorkPage">
			<Player
			  playsInline
			  poster="/assets/poster.png"
			  src={ImgWorkComp[WorkDetail[0].fileName]}
			/>

			<img className="LineBreak" src={ImgComp["fancyHorLine"]} />	
			<InfoSection WorkDetail={WorkDetail[0]}/>
			<hr />
			<LinkSection  WorkDetail={WorkDetail[0]}/>
		</div>
	);
}

export default DetailWorkPage;


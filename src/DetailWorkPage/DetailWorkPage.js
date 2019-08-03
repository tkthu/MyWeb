import React from 'react'
import WorkList from '../WorkPage/WorkList.json'
import InfoSection from './InfoSection.js'
import LinkSection from './LinkSection.js'

import { Player } from 'video-react';
import "../../node_modules/video-react/dist/video-react.css"; // import css

import './DetailWorkPage.css';

const DetailWorkPage = props => {
	let WorkDetail = WorkList.database.filter((WorkDetail)=>WorkDetail.id===props.currentWork)
	let srcImage = '/images/work/video/' + WorkDetail[0].fileName
	return(	
		<div className="PanelContent DetailWorkPage">
			<Player
			  playsInline
			  poster="/assets/poster.png"
			  src={srcImage}
			/>

			<img className="LineBreak" src="/images/fancyHorizontalLine.png" />	
			<InfoSection WorkDetail={WorkDetail[0]}/>
			<hr />
			<LinkSection  WorkDetail={WorkDetail[0]}/>
		</div>
	);
}

export default DetailWorkPage;


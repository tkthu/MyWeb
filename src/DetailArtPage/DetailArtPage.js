import React from 'react'
import ArtList from '../ArtPage/ArtList.json'
import InfoSection from './InfoSection.js'

import './DetailArtPage.css';

const DetailArtPage = props => {
	let ArtDetail = ArtList.database.filter((ArtDetail)=>ArtDetail.id===props.currentWork)
	let srcImage = '/images/art/' + ArtDetail[0].fileName
	return(	
		<div className="PanelContent DetailArtPage">
			<img className="Image" src={srcImage} />
			<img className="LineBreak" src="/images/fancyHorizontalLine.png" />	
			<InfoSection ArtDetail={ArtDetail[0]}/>
		</div>
	);
}

export default DetailArtPage;


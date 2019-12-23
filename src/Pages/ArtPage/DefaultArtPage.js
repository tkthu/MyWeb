import ArtList from '../../Database/ArtList.json';
/*-------------------------------------------------*/
import React from 'react';
import Thumbnail from '../../Components/Thumbnail.js';

import ImgComp from "../../Components/images/ImgComp.js";

const DefaultArtPage = ({ match }) => {
	var columns = [];
	for (var i = 0; i < 3; i++) {
	    columns.push(
	    	<div className="column">
			{
				ArtList.database.filter((ArtDetail,id)=>id%3=== i ).map((ArtDetail,id)=>{
					return <Thumbnail key={id} InfoDetail={ArtDetail} url={match.url} />
				})
			}
			</div>
	    );
	}
	
	return(
		<React.Fragment>
			<h1>DIGITAL ARTS</h1>
			<img className="LineBreak" src={ImgComp["fancyHorLine"]} />	
			<div className="row">
				{columns}
			</div>	
		</React.Fragment>
	);
}

export default DefaultArtPage;

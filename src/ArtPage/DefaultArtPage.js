import React from 'react';
import ArtItem from './ArtItem.js';
import ArtList from './ArtList.json';

import ImgComp from "../images/ImgComp.js";

const DefaultArtPage = ({ match }) => (	
	<React.Fragment>
		<h1>MY PROUDEST DRAWING</h1>
		<img className="LineBreak" src={ImgComp["fancyHorLine"]} />	
		<div className="row"> 
			<div className="column">
			{
				ArtList.database.filter((ArtDetail,id)=>id%3===0).map((ArtDetail,id)=>{
					return <ArtItem key={id} ArtDetail={ArtDetail} url={match.url} />
				})
			}
			</div>
			<div className="column">
			{
				ArtList.database.filter((ArtDetail,id)=>id%3===1).map((ArtDetail,id)=>{
					return <ArtItem key={id} ArtDetail={ArtDetail} url={match.url} />
				})
			}
			</div>
			<div className="column">
			{
				ArtList.database.filter((ArtDetail,id)=>id%3===2).map((ArtDetail,id)=>{
					return <ArtItem key={id} ArtDetail={ArtDetail} url={match.url} />
				})
			}
			</div>
		</div>	
	</React.Fragment>
);

export default DefaultArtPage;

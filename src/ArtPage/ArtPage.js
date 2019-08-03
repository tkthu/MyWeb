import React from 'react'
import ArtItem from './ArtItem.js'
import ArtList from './ArtList.json'

import './ArtPage.css';

const ArtPage = props => (	
	<div className="PanelContent ArtPage">
		<h1>MY PROUDEST DRAWING</h1>
		<img className="LineBreak" src="/images/fancyHorizontalLine.png" />	
		<div className="row"> 
			<div className="column">
			{
				ArtList.database.filter((ArtDetail)=>ArtDetail.id%3===0).map((ArtDetail)=>{
					return <ArtItem key={ArtDetail.id} ArtDetail={ArtDetail} onClickHandler={props.onClickHandler} toPage="detailArt"/>
				})
			}
			</div>
			<div className="column">
			{
				ArtList.database.filter((ArtDetail)=>ArtDetail.id%3===1).map((ArtDetail)=>{
					return <ArtItem key={ArtDetail.id} ArtDetail={ArtDetail} onClickHandler={props.onClickHandler} toPage="detailArt"/>
				})
			}
			</div>
			<div className="column">
			{
				ArtList.database.filter((ArtDetail)=>ArtDetail.id%3===2).map((ArtDetail)=>{
					return <ArtItem key={ArtDetail.id} ArtDetail={ArtDetail} onClickHandler={props.onClickHandler} toPage="detailArt"/>
				})
			}
			</div>
		</div>		
	</div>
);

export default ArtPage;

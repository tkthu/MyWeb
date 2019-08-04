import React from 'react';
import WorkItem from './WorkItem.js';
import WorkList from './WorkList.json';

import ImgComp from "../images/ImgComp.js";

import './WorkPage.css';


const WorkPage = props => (	
	<div className="PanelContent WorkPage">
		<h1>MY PROUDEST PROJECT</h1>
		<img className="LineBreak" src={ImgComp["fancyHorLine"]} />	
		<div className="row"> 
			<div className="column">
			{
				WorkList.database.filter((WorkDetail)=>WorkDetail.id%3===0).map((WorkDetail)=>{
					return <WorkItem key={WorkDetail.id} WorkDetail={WorkDetail} onClickHandler={props.onClickHandler} toPage="detailWork"/>
				})
			}
			</div>
			<div className="column">
			{
				WorkList.database.filter((WorkDetail)=>WorkDetail.id%3===1).map((WorkDetail)=>{
					return <WorkItem key={WorkDetail.id} WorkDetail={WorkDetail} onClickHandler={props.onClickHandler} toPage="detailWork"/>
				})
			}
			</div>
			<div className="column">
			{
				WorkList.database.filter((WorkDetail)=>WorkDetail.id%3===2).map((WorkDetail)=>{
					return <WorkItem key={WorkDetail.id} WorkDetail={WorkDetail} onClickHandler={props.onClickHandler} toPage="detailWork"/>
				})
			}
			</div>
		</div>		
	</div>
);

export default WorkPage;

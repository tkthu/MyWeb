import React from 'react';
import WorkItem from './WorkItem.js';
import WorkList from './WorkList.json';

import ImgComp from "../images/ImgComp.js";

const DefaultWorkPage = ({ match }) => (	
	<React.Fragment>
		<h1>MY PROUDEST PROJECT</h1>
		<img className="LineBreak" src={ImgComp["fancyHorLine"]} />	
		<div className="row"> 
			<div className="column">
			{
				WorkList.database.filter((WorkDetail,id)=>id%3===0).map((WorkDetail,id)=>{
					return <WorkItem key={id} WorkDetail={WorkDetail} url={match.url}/>
				})
			}
			</div>
			<div className="column">
			{
				WorkList.database.filter((WorkDetail,id)=>id%3===1).map((WorkDetail,id)=>{
					return <WorkItem key={id} WorkDetail={WorkDetail} url={match.url}/>
				})
			}
			</div>
			<div className="column">
			{
				WorkList.database.filter((WorkDetail,id)=>id%3===2).map((WorkDetail,id)=>{
					return <WorkItem key={id} WorkDetail={WorkDetail} url={match.url}/>
				})
			}
			</div>
		</div>	
	</React.Fragment>
);

export default DefaultWorkPage;

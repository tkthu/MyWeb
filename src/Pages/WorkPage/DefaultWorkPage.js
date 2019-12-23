import WorkList from '../../Database/WorkList.json';
/*-------------------------------------------*/
import React from 'react';
import ImgComp from "../../Components/images/ImgComp.js";
import Thumbnail from '../../Components/Thumbnail.js';

const DefaultWorkPage = ({ match }) => {
	var columns = [];
	for (var i = 0; i < 3; i++) {
	    columns.push(
	    	<div className="column">
			{
				WorkList.database.filter((WorkDetail,id)=>id%3===i).map((WorkDetail,id)=>{
					return <Thumbnail key={id} InfoDetail={WorkDetail} url={match.url}/>
				})
			}
			</div>
	    );
	}
	return(
		<React.Fragment>
			<h1>MY PROUDEST PROJECT</h1>
			<img className="LineBreak" src={ImgComp["fancyHorLine"]} />	
			<div className="row"> 
				{columns}
			</div>	
		</React.Fragment>
	);
}

export default DefaultWorkPage;


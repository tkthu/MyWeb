import WorkList from '../../Database/WorkList.json';
/*-------------------------------------------*/
import React from 'react';
import DetailWorkPage from "../DetailWorkPage/DetailWorkPage.js";
import DefaultWorkPage from "./DefaultWorkPage.js";
import { Route } from "react-router-dom";

import './WorkPage.css';

const WorkPage = ({ match }) => {
	return (
		<div className="PanelContent" id="WorkPage">			
			<Route exact path={`${match.path}`} component={DefaultWorkPage} />
			<Route path={`${match.path}/:id`} component={DetailWorkPage}/>
		</div>
	)
}

export default WorkPage;

import React from 'react';
import WorkItem from './WorkItem.js';
import WorkList from './WorkList.json';

import DefaultWorkPage from "./DefaultWorkPage.js"
import DetailWorkPage from "../DetailWorkPage/DetailWorkPage.js"

import ImgComp from "../images/ImgComp.js";

import { Route } from "react-router-dom";

import './WorkPage.css';

const WorkPage = ({ match }) => {
	return (
		<div className="PanelContent WorkPage">			
			<Route exact path={`${match.path}`} component={DefaultWorkPage} />
			<Route path={`${match.path}/:id`} component={DetailWorkPage}/>
		</div>
	)
}

export default WorkPage;

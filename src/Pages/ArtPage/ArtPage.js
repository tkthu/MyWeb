import ArtList from '../../Database/ArtList.json';
/*-------------------------------------------------*/
import React from 'react';
import DetailArtPage from "../DetailArtPage/DetailArtPage.js";
import DefaultArtPage from "./DefaultArtPage.js";
import { Route } from "react-router-dom";

import './ArtPage.css';

const ArtPage = ({ match }) => {
	return (
		<div className="PanelContent" id="ArtPage">
			<Route exact path={`${match.path}`} component={DefaultArtPage} />
			<Route path={`${match.path}/:id`} component={DetailArtPage}/>
		</div>
	)
}

export default ArtPage;

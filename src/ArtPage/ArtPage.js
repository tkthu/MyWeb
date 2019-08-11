import React from 'react';
import ArtItem from './ArtItem.js';
import ArtList from './ArtList.json';

import DefaultArtPage from "./DefaultArtPage.js"
import DetailArtPage from "../DetailArtPage/DetailArtPage.js"

import ImgComp from "../images/ImgComp.js";

import { Route } from "react-router-dom";


import './ArtPage.css';

const ArtPage = ({ match }) => {
	return (
		<div className="PanelContent ArtPage">
			<Route exact path={`${match.path}`} component={DefaultArtPage} />
			<Route path={`${match.path}/:id`} component={DetailArtPage}/>
		</div>
	)
}

export default ArtPage;

import React from 'react';
import HomePage from '../HomePage/HomePage.js';
import WorkPage from '../WorkPage/WorkPage.js';
import DetailWorkPage from '../DetailWorkPage/DetailWorkPage.js';
import ArtPage from '../ArtPage/ArtPage.js';
import DetailArtPage from '../DetailArtPage/DetailArtPage.js';
import AboutMePage from '../AboutMePage/AboutMePage.js';

import { BrowserRouter as Router, Route } from "react-router-dom";


import './Panel.css';

class Panel extends React.Component {
	render(){
		return (
			<div className="Panel" >
				<Router basename="/MyWeb">
			        <Route exact path="/" component={HomePage} />
			        <Route path="/aboutMe" component={AboutMePage} />
			        <Route path="/drawing" component={ArtPage} />
			        <Route path="/project" component={WorkPage} />			        
			    </Router>			
			</div>
		)
	}
}

export default Panel

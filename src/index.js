import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import HomePage from './Pages/HomePage/HomePage.js';
import WorkPage from './Pages/WorkPage/WorkPage.js';
import DetailWorkPage from './Pages/DetailWorkPage/DetailWorkPage.js';
import ArtPage from './Pages/ArtPage/ArtPage.js';
import DetailArtPage from './Pages/DetailArtPage/DetailArtPage.js';
import AboutMePage from './Pages/AboutMePage/AboutMePage.js';
import ErrorPage from './Pages/ErrorPage.js';

import LeftNav from './Components/LeftNav/LeftNav.js';

import './index.css';

class Web extends React.Component {
	render() {
	    return (
      		<Router>
				<LeftNav />
				<div className="Panel">
					<Switch>
				        <Route exact path="/" component={HomePage} />
				        <Route path="/aboutMe" component={AboutMePage} />
				        <Route path="/digitalArt" component={ArtPage} />
				        <Route path="/project" component={WorkPage} />
				        <Route component={ErrorPage} />
				        <Redirect from='*' to='/' />		        
			        </Switch>
				</div>
		    </Router>
	    );
	}
}

ReactDOM.render(
  <Web />,
  document.querySelector('#root')
);
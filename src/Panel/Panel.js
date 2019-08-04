import React from 'react';
import HomePage from '../HomePage/HomePage.js';
import WorkPage from '../WorkPage/WorkPage.js';
import DetailWorkPage from '../DetailWorkPage/DetailWorkPage.js';
import ArtPage from '../ArtPage/ArtPage.js';
import DetailArtPage from '../DetailArtPage/DetailArtPage.js';
import AboutMePage from '../AboutMePage/AboutMePage.js';

import './Panel.css';

class Panel extends React.Component {
	constructor(props){
		super(props)
		this.state ={
			full:false
		}
	}
	render(){
		let current = <HomePage onClickHandler={this.props.onClickHandler}/>;
		let PanelClassNames="Panel"

		if(this.props.currentPage === "aboutMe"){
			current = <AboutMePage />;
			PanelClassNames="Panel Full"
		}

		if(this.props.currentPage === "code"){
			current = <WorkPage onClickHandler={this.props.onClickHandler}/>;
			PanelClassNames="Panel Full"
		}
		if(this.props.currentPage === "detailWork"){
			current = <DetailWorkPage onClickHandler={this.props.onClickHandler} currentWork={this.props.currentWork}/>;
			PanelClassNames="Panel Full"
		}

		if(this.props.currentPage === "art"){
			current = <ArtPage onClickHandler={this.props.onClickHandler}/>;
			PanelClassNames="Panel Full"
		}
		if(this.props.currentPage === "detailArt"){
			current = <DetailArtPage onClickHandler={this.props.onClickHandler} currentWork={this.props.currentWork}/>;
			PanelClassNames="Panel Full"
		}

		

		return (
			<div className={PanelClassNames} >
				{current}

			</div>
		)
	}
}

export default Panel

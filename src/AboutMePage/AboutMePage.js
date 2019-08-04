import React from 'react';
import ReactTooltip from 'react-tooltip';

import Level from '../Level/Level.js';

import ImgComp from "../images/ImgComp.js";

import './AboutMePage.css';

class AboutMePage extends React.Component {
	render(){
		return(
			<div className="PanelContent AboutMePage">
				<img className="background" src={ImgComp["background"]}/>

				<Level lvlID="lvl1" year="2015 - 2018"/>
				<ReactTooltip className="ReactTooltip" id='lvl1RT' aria-haspopup='true' role='example' place="bottom">
					<h5>Highschool Level</h5>
					<h6>Boss defeated</h6>
					<hr />
					<p>the National High School <br /> Graduation Examination</p>
				</ReactTooltip>
				<img className="flag" id="flag1" src={ImgComp["flag"]}/>
				
				<Level lvlID="lvl2" year="2018 - 2019"/>
				<ReactTooltip className="ReactTooltip" id='lvl2RT' aria-haspopup='true' role='example' place="bottom">
					<h5>TDT Level</h5>
					<h6>Earned title</h6>
					<hr />
					<p>Freshman</p>
					<h6>New skin</h6>
					<hr />
					<p>TDT traditional outfit</p>
					<h6>Skill learned</h6>
					<hr />
					<p>Java, AutoIT,<br /> HTML, CSS, Javascript, ReactJS</p>
					<h6>Secrets unlocked</h6>
					<hr />
					<p>A Single Page Application Website,<br /> a cute little companion called "Screenmate"</p>
				</ReactTooltip>
				<img className="flag" id="flag2" src={ImgComp["flag"]}/>

				<Level lvlID="lvl3" year="2019"/>
				<ReactTooltip className="ReactTooltip" id='lvl3RT' aria-haspopup='true' role='example' place="bottom">
					<h5>TDT Level</h5>
					<h6>Earned title</h6>
					<hr />
					<p>sophomore</p>
				</ReactTooltip>

				<img className="me" src={ImgComp["me"]} data-tip data-for="meRT" />
				<ReactTooltip className="ReactTooltip" id='meRT' aria-haspopup='true' role='example'>
					<p>It's-a me!</p>
				</ReactTooltip>
			</div>

		);
	}
}

export default AboutMePage

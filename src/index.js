import React from 'react';
import ReactDOM from 'react-dom';

import LeftNav from './LeftNav/LeftNav.js'
import Panel from './Panel/Panel.js'
import Slider from './Slider/Slider.js'

import './index.css';

class Web extends React.Component {
	constructor(){
		super()
		this.state ={
			currentPage:"home",
			currentWork:-1 //ID

		}
	}
	changeCurPageHandler = (e) => {
		this.setState( () =>{
			return {
				currentPage: e.target.toPage,
				currentWork: e.target.showWork
			}
		});
	}
	render() {
		let slider;
		if(this.state.currentPage === "detailArt" || this.state.currentPage === "detailWork"){
			slider = <Slider onClickHandler={this.changeCurPageHandler} currentPage={this.state.currentPage}/>
		}
	    return (
	      	<div className="Web">
	      		<LeftNav onClickHandler={this.changeCurPageHandler} />
	      		<Panel onClickHandler={this.changeCurPageHandler} currentPage={this.state.currentPage} currentWork={this.state.currentWork}/>
	      		{slider}
	      	</div>
	    );
	}
}

ReactDOM.render(
  <Web />,
  document.querySelector('#root')
);
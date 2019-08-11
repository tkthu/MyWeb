import React from 'react';
import ArtList from '../ArtPage/ArtList.json';
import ArtItem from '../ArtPage/ArtItem.js';

import WorkList from '../WorkPage/WorkList.json';
import WorkItem from '../WorkPage/WorkItem.js';

import ToggleSlider from "./ToggleSlider.js";

import ImgComp from "../images/ImgComp.js";

import { BrowserRouter as Router, Route } from "react-router-dom";

import "./Slider.css"

class Slider extends React.Component {
	constructor(props){
		super(props)
		this.state ={
			show:true,
			currentShows:[0,1,2]
		}
	}
	changeShowHandler = () => {
		this.setState( (prevState) =>{
			return {show: !prevState.show};
		});
	}
	changeCurShowHandler = (e) => {
		if(this.props.currentPage === "DetailArtPage"){
			this.setState( (prevState) =>{
				return {					
					currentShows: prevState.currentShows.map((x) => (x + e.target.number + ArtList.Info.quantity )% ArtList.Info.quantity)
				}	
			});
		}
		if(this.props.currentPage === "DetailWorkPage"){
			this.setState( (prevState) =>{
				return {					
					currentShows: prevState.currentShows.map((x) => (x + e.target.number + WorkList.Info.quantity )% WorkList.Info.quantity)
				}	
			});
		}
	}
	render(){
		let ToggleClassNames="ToggleSlider"
		let SliderClassNames="Slider"
		if(this.state.show){
			ToggleClassNames="ToggleSlider Open"
			SliderClassNames="Slider Open"
		}

		let currentShowThumbnails =(
			<div className="Picture">
				{ArtList.database.filter((ArtDetail,id)=>this.state.currentShows[0] === id ).map((ArtDetail,id)=>
					<ArtItem key={id} ArtDetail={ArtDetail} url={this.props.url}/>
				)}
				{ArtList.database.filter((ArtDetail,id)=>this.state.currentShows[1] === id ).map((ArtDetail,id)=>
					<ArtItem key={id} ArtDetail={ArtDetail} url={this.props.url}/>
				)}	
				{ArtList.database.filter((ArtDetail,id)=>this.state.currentShows[2] === id ).map((ArtDetail,id)=>
					<div className="del ArtItem" key={id}><ArtItem  ArtDetail={ArtDetail} url={this.props.url}/></div>
				)}
			</div>
		)

		if(this.props.currentPage === "DetailWorkPage"){
			currentShowThumbnails =(
				<div className="Picture">
					{WorkList.database.filter((WorkDetail,id)=>this.state.currentShows[0] === id ).map((WorkDetail,id)=>
						<WorkItem key={id} WorkDetail={WorkDetail} url={this.props.url}/>
					)}	
					{WorkList.database.filter((WorkDetail,id)=>this.state.currentShows[1] === id ).map((WorkDetail,id)=>
						<WorkItem key={id} WorkDetail={WorkDetail} url={this.props.url}/>
					)}
				</div>
			)
		}

		return(
			<div>
				<ToggleSlider className={ToggleClassNames} onClickHandler={this.changeShowHandler}  />
				<div className={SliderClassNames}>	
					<img id="LeftArrow" className="Arrow" src={ImgComp["arrowIcon"]} onClick={()=>{
							const target ={number:-1};
							const e = {target};
							this.changeCurShowHandler(e)						
						}
					} />

					{currentShowThumbnails}

					<img id="RightArrow" className="Arrow" src={ImgComp["arrowIcon"]} onClick={()=>{
							const target ={number:1};
							const e = {target};
							this.changeCurShowHandler(e)						
						}
					} />
				</div>
			</div>
			
			
		);
	}
}

export default Slider;			
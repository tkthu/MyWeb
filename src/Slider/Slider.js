import React from 'react'
import ArtList from '../ArtPage/ArtList.json'
import ArtItem from '../ArtPage/ArtItem.js'

import WorkList from '../WorkPage/WorkList.json'
import WorkItem from '../WorkPage/WorkItem.js'

import ToggleSlider from "./ToggleSlider.js"

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
		console.log(this.state.show)
	}
	changeCurShowHandler = (e) => {
		if(this.props.currentPage === "detailArt"){
			this.setState( (prevState) =>{
				return {					
					currentShows: prevState.currentShows.map((x) => (x + e.target.number + ArtList.Info.quantity )% ArtList.Info.quantity)
				}	
			});
		}
		if(this.props.currentPage === "detailWork"){
			this.setState( (prevState) =>{
				return {					
					currentShows: prevState.currentShows.map((x) => (x + e.target.number + WorkList.Info.quantity )% WorkList.Info.quantity)
				}	
			});
		}
		console.log(this.state.currentShows)
	}
	render(){
		let ToggleClassNames="ToggleSlider"
		let SliderClassNames="Slider"
		if(this.state.show){
			ToggleClassNames="ToggleSlider Open"
			SliderClassNames="Slider Open"
		}

		let currentShowsPicture =
		<div className="Picture">
			{ArtList.database.filter((ArtDetail)=>this.state.currentShows[0] === ArtDetail.id ).map((ArtDetail)=>
				<ArtItem key={ArtDetail.id} ArtDetail={ArtDetail} onClickHandler={this.props.onClickHandler} toPage="detailArt"/>
			)}
			{ArtList.database.filter((ArtDetail)=>this.state.currentShows[1] === ArtDetail.id ).map((ArtDetail)=>
				<ArtItem key={ArtDetail.id} ArtDetail={ArtDetail} onClickHandler={this.props.onClickHandler} toPage="detailArt"/>
			)}	
			{ArtList.database.filter((ArtDetail)=>this.state.currentShows[2] === ArtDetail.id ).map((ArtDetail)=>
				<div className="del ArtItem" key={ArtDetail.id}><ArtItem  ArtDetail={ArtDetail} onClickHandler={this.props.onClickHandler} toPage="detailArt"/></div>
			)}
		</div>
			
		

		if(this.props.currentPage === "detailWork"){
			currentShowsPicture =
			<div className="Picture">
				{WorkList.database.filter((WorkDetail)=>this.state.currentShows[0] === WorkDetail.id ).map((WorkDetail)=>
					<WorkItem key={WorkDetail.id} WorkDetail={WorkDetail} onClickHandler={this.props.onClickHandler} toPage="detailWork"/>
				)}	
				{WorkList.database.filter((WorkDetail)=>this.state.currentShows[1] === WorkDetail.id ).map((WorkDetail)=>
					<WorkItem key={WorkDetail.id} WorkDetail={WorkDetail} onClickHandler={this.props.onClickHandler} toPage="detailWork"/>
				)}
			</div>
		}
		

		return(
			<div>
				<ToggleSlider className={ToggleClassNames} onClickHandler={this.changeShowHandler}  />
				<div className={SliderClassNames}>	
					<img id="LeftArrow" className="Arrow" src="/images/arrowIcon.png" onClick={()=>{
							const target ={number:-1};
							const e = {target};
							this.changeCurShowHandler(e)						
						}
					} />		

					{currentShowsPicture}
							
					<img id="RightArrow" className="Arrow" src="/images/arrowIcon.png" onClick={()=>{
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
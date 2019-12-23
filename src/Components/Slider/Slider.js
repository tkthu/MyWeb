import ArtList from '../../Database/ArtList.json';
import WorkList from '../../Database/WorkList.json';
/*----------------------------------------*/
import React from 'react';

import Thumbnail from '../Thumbnail.js';
import ImgComp from "../images/ImgComp.js";
import ToggleSlider from "./ToggleSlider.js";

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

		var items = [];
		for (var i = 0; i < 3; i++) {
			if(this.props.currentPage === "DetailArtPage")
				items.push(
			    	ArtList.database.filter((ArtDetail,id)=>this.state.currentShows[i] === id ).map((ArtDetail,id)=>
						<div className="Item" id={i} key={id} ><Thumbnail InfoDetail={ArtDetail} url={this.props.url}/></div>
					)
		    	);
			else if(this.props.currentPage === "DetailWorkPage")
				items.push(
			    	WorkList.database.filter((WorkDetail,id)=>this.state.currentShows[i] === id ).map((WorkDetail,id)=>
						<div className="Item" id={i} key={id} ><Thumbnail InfoDetail={WorkDetail} url={this.props.url}/></div>
					)
		    	);		    
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

					<div className="Picture">
						{items}
					</div>

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
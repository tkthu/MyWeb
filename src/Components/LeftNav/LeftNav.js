import React from 'react'
import ContactIcon from './ContactIcon.js'
import NavButton from './NavButton.js'
import NavButtonToggle from './NavButtonToggle.js'
import ToggleLeftNav from './ToggleLeftNav.js'

import ImgComp from "../images/ImgComp.js";

import './LeftNav.css';

class LeftNav extends React.Component {
	constructor(props){
		super(props)
		this.state ={
			show:true
		}
	}
	changeShowHandler = () => {
		this.setState( (prevState) =>{
			return {show: !prevState.show};
		});
	}
	render(){
		let ToggleClassNames="ToggleLeftNav"
		let NavClassNames="LeftNav"
		if(this.state.show){
			ToggleClassNames="ToggleLeftNav Open"
			NavClassNames="LeftNav Open"
		}

		return (
			<div>			
				<ToggleLeftNav className={ToggleClassNames} onClickHandler={this.changeShowHandler}  />			
				
				<nav className={NavClassNames}>
					<img className="Avatar" src ={ImgComp["myAvatar"]} />

					<ul className="TextNav">
						<NavButton text="HOME" toPage=""  />
						<NavButton text="ABOUT ME" toPage="aboutMe" />
						<NavButtonToggle text="WORK" />
					</ul>

					<div className="spacer" />
					
				    <div className="Contact">
					    <hr style={{ backgroundColor: "white",height: 1 }} />
					    <ul>
							<li>Phone: (+84) 939853195</li>
							<li>Gmail: thai.k.thu2000@gmail.com</li>
						</ul>
					    <hr style={{ backgroundColor: "white",height: 1 }} />
					    <div>
					    	<ContactIcon imgSrc={"facebookIcon"} linkTo="https://www.facebook.com/thai.k.thu"/>
					    	<ContactIcon imgSrc={"deviantartIcon"} linkTo="https://www.deviantart.com/thu2000"/>
						    <ContactIcon imgSrc={"linkedinIcon"} linkTo="https://www.linkedin.com/in/thu-thai-kim-b458b316a/"/>			    
					    </div>
				    </div>			    
				</nav>
			</div>
		);
	}	
}

export default LeftNav;
import React from 'react';

import ImgComp from "../images/ImgComp.js";

const ContactIcon = props => (	
	<a href={props.linkTo} >
		<img src={ImgComp[props.imgSrc]} style={{width:"35px" , margin:"5px"}}/>
	</a>	
);

export default ContactIcon;

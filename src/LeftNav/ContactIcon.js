import React from 'react'

const ContactIcon = props => (	
	<a href={props.linkTo} >
		<img src={props.imgSrc} style={{width:"35px" , margin:"5px"}}/>
	</a>	
);

export default ContactIcon;

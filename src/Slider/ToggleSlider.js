import React from 'react';

import ImgComp from "../images/ImgComp.js";

const ToggleSlider = props => (
	<button className={props.className} onClick={props.onClickHandler}>
		<img src={ImgComp["hamburgerIcon"]} style={{width:"20px" , margin:"20px  10px 20px 10px"}}/>
	</button>
);

export default ToggleSlider;

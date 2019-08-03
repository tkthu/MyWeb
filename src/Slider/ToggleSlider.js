import React from 'react'

const ToggleSlider = props => (
	<button className={props.className} onClick={props.onClickHandler}>
		<img src="/images/hamburgerIcon.png" style={{width:"20px" , margin:"20px  10px 20px 10px"}}/>
	</button>
);

export default ToggleSlider;

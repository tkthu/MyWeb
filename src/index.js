import React from 'react';
import ReactDOM from 'react-dom';

import Panel from './Panel/Panel.js';
import Slider from './Slider/Slider.js';

import './index.css';

class Web extends React.Component {
	render() {
	    return (
	      	<div className="Web">
	      		<Panel />
	      	</div>
	    );
	}
}

ReactDOM.render(
  <Web />,
  document.querySelector('#root')
);
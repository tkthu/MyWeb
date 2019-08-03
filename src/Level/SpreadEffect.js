import React from 'react'
import ReactDOM from 'react-dom';

import {keyframes, styler , stagger} from "popmotion";

class SpreadEffect extends React.Component {
  constructor(props) {
    super(props);
    
  }
  componentDidMount (){
    this.myRef = ReactDOM.findDOMNode(this);
    ////////////////////////////////////////////
    const COUNT = 3;
    const DURATION = 1000;
    const initialPhase = {scale: 1, opacity: 1};

    const actions = Array(COUNT).fill(
      keyframes({
        values: [
          initialPhase,
          {scale: 2, opacity: 0}
        ],
        duration: DURATION,
        loop:Infinity,
        yoyo:Infinity,
      })  
    );
    ////////////////////////////////////////////
    const node = this.myRef;

    const divStyler1 = styler(node.querySelector('.cir1'));
    const divStyler2 = styler(node.querySelector('.cir2'));
    const divStyler3 = styler(node.querySelector('.cir3'));

    const stylers = [divStyler1,divStyler2,divStyler3];


    stagger(actions,DURATION / COUNT).start({
      update: (v) => v.map( ({scale,opacity},index) => {
        stylers[index].set({
          scale:scale,
          opacity:opacity,
        })
      })
    });
  }
  render(){    
    return( 
      <div className="SpreadEffect">
        <div className="cir1"></div>
        <div className="cir2"></div>
        <div className="cir3"></div>
      </div>
    );
  }
}

export default SpreadEffect;
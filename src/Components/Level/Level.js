import React from 'react'

import SpreadEffect from "./SpreadEffect.js"

import './Level.css';

const Level = (props)=>{
  let str = props.lvlID + "RT"
  return( 
      <div className="Level" id={props.lvlID} data-tip data-for={str}>
        <div> 
          <div className="cir" />
        <SpreadEffect />

        </div>
        <p>{props.year}</p>
      </div>
    );
}

export default Level;
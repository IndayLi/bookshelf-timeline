import React, { Component } from 'react';
import SVGIcon from './SVGIcon'
import SVGCircle from './SVGCircle'

const NavBar = (props) => {
  return (
    <div id="nav-bar">
      <div id="nav-icons">
        <div className="chevron-left light"><SVGIcon name="chevron-left-light" height={40} /></div>
        <div className="chevron-left solid"><SVGIcon name="chevron-left-solid" height={40} fill="#B5B5B5"/></div>
        <div className="chevron-right solid"><SVGIcon name="chevron-right-solid" height={40} fill="#B5B5B5"/></div>
        <div className="chevron-right light"><SVGIcon name="chevron-right-light" height={40} /></div>
      </div>
    </div>
  )
}

export default NavBar;

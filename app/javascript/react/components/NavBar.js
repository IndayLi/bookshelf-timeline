import React, { Component } from 'react';
import SVGIcon from './SVGIcon'
import SVGCircle from './SVGCircle'

const NavBar = (props) => {
  return (
    <div id="nav-bar">
      <div id="nav-icons">
        <div><SVGIcon name="chevron-left-light" height={30} /></div>
        <div><SVGIcon name="chevron-left-solid" height={30} fill="white"/></div>
        <div className="div-circles">
          <SVGCircle className="nav-circle" radius="10" viewBox="0 0 30 30" fill="white"/>
          <SVGCircle className="nav-circle" radius="10" viewBox="0 0 30 30" fill="white"/>
          <SVGCircle className="nav-circle" radius="10" viewBox="0 0 30 30" fill="white"/>
        </div>
        <div><SVGIcon name="chevron-right-solid" height={30} fill="white"/></div>
        <div><SVGIcon name="chevron-right-light" height={30} /></div>
      </div>
    </div>
  )
}

export default NavBar;

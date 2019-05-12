import React, { Component } from 'react';
import SVGIcon from './SVGIcon'
import SVGCircle from './SVGCircle'

const NavBar = (props) => {
  return (
    <div id="nav-bar">
      <div id="nav-icons">
        <div><SVGIcon name="chevron-left-light" height={40} /></div>
        <div><SVGIcon name="chevron-left-solid" height={40} /></div>
        <div id="nav-circles">
          <SVGCircle className="nav-circle" radius="10" viewBox="0 0 20 20" fill="red"/>
          <SVGCircle className="nav-circle" radius="10" viewBox="0 0 20 20" fill="white"/>
          <SVGCircle className="nav-circle" radius="10" viewBox="0 0 20 20" fill="white"/>
        </div>
        <div><SVGIcon name="chevron-right-solid" height={40} /></div>
        <div><SVGIcon name="chevron-right-light" height={40} /></div>
      </div>
    </div>
  )
}

export default NavBar

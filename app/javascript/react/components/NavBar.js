import React, { Component } from 'react';
import SVGIcon from './SVGIcon'
import SVGCircle from './SVGCircle'

const NavBar = (props) => {
  return (
    <div id="nav-bar">
      <h3>This is sample text from NavBar</h3>
      <div id="nav-icons">
        <div><SVGIcon name="chevron-left-light" height={40} /></div>
        <div><SVGIcon name="chevron-left-solid" height={40} /></div>
        <div>
          <SVGCircle className="nav-circles" radius="10" viewBox="0 0 20 20" color="pink"/>
          <SVGCircle className="nav-circles" radius="10" viewBox="0 0 20 20" color="white"/>
          <SVGCircle className="nav-circles" radius="10" viewBox="0 0 20 20" color="white"/>
        </div>
        <div><SVGIcon name="chevron-right-solid" height={40} /></div>
        <div><SVGIcon name="chevron-right-light" height={40} /></div>
      </div>
    </div>
  )
}

export default NavBar

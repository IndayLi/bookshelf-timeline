import React, { Component } from 'react';
import SVGIcon from './SVGIcon'
import SVGCircle from './SVGCircle'


const MenuBar = (props) => {
  return (
    <div>
      <div className="container">
      {props.children}
      </div>
      <div id="bottom-navbar">
        <h3>This is sample text from MenuBar</h3>
        <div id="nav-menu">
          <div><SVGIcon name="user" height={40} /></div>
          <div><SVGIcon name="books" height={40} /></div>
          <div><SVGIcon name="calendar" height={40} /></div>
          <div><SVGIcon name="search" height={40} /></div>
        </div>
      </div>
    </div>
  )
}

export default MenuBar

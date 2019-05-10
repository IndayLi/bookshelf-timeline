import React, { Component } from 'react';
import SVGIcon from './SVGIcon'
import SVGCircle from './SVGCircle'


const MenuBar = (props) => {
  return (
    <div>
      <div className="container">
      {props.children}
      </div>
      <div id="menu-bar">
        <div className="menu-icon">
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

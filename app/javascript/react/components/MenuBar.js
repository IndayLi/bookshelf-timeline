import React, { Component } from 'react';
import { Link } from 'react-router'
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
          <div><Link to={'/books'}><SVGIcon name="books" height={40} /></Link></div>
          <div><SVGIcon name="calendar" height={40} /></div>
          <div><SVGIcon name="search" height={40} /></div>
        </div>
      </div>
    </div>
  )
}

export default MenuBar

import React, { Component } from 'react';
import SVGIcon from './SVGIcon'
import randomColor from 'randomcolor'
// import SVG from 'react-inlinesvg';
// import Loader from '../Loader';
const styles = {
  display: "flex",
  flexWrap: "wrap",
  alignItems: "center",
  fontFamily: "sans-serif",
  justifyContent: "space-between"
};


const NavBar = (props) => {
  return (
    <div>
      <div className="container">
      {props.children}
      </div>
      <div id="bottom-navbar">
        <h3>This is sample text from NavBar</h3>
        <div id="nav-icons">
          <div><SVGIcon name="chevron-left-light" height={40} /></div>
          <div><SVGIcon name="chevron-left-solid" height={40} /></div>
          <div><SVGIcon name="user" height={40} /></div>
          <div><SVGIcon name="books" height={40} /></div>
          <div><SVGIcon name="calendar" height={40} /></div>
          <div><SVGIcon name="search" height={40} /></div>
          <div><SVGIcon name="chevron-right-solid" height={40} /></div>
          <div><SVGIcon name="chevron-right-light" height={40} /></div>
        </div>
      </div>
    </div>
  )
}

export default NavBar

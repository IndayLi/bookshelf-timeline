import React, { Component } from 'react';
import { Link } from 'react-router'
import SVGIcon from './SVGIcon'
import SVGCircle from './SVGCircle'


const MenuBar = (props) => {
  let user = "#707070";
  let books = "#707070";
  let calendar = "#707070";
  let search ="#707070";
  if (props.menu === "books") {
    books = "#02A7BC"
  } else if (props.menu === "user") {
    user = "#02A7BC"
  } else if (props.menu === "calendar") {
    calendar = "#02A7BC"
  } else if (props.menu === "search") {
    search = "#02A7BC"
  }

  <div className="container">
  {props.children}
  </div>
  return (
    <div>
      <div id="menu-bar">
        <div className="menu-icon">
          <div className="icon-image">
            <SVGIcon name="user" height={40} fill= {`${user}`} />
          </div>
          <div className={`icon-image ${books}`}>
            <Link to={'/books'}>
              <SVGIcon name="books" height={40} fill= {`${books}`}/>
            </Link></div>
          <div className={`icon-image ${calendar}`}>
            <SVGIcon name="calendar" height={40} fill= {`${calendar}`}/>
          </div>
          <div className={`icon-image ${search}`}>
            <SVGIcon name="search" height={40} fill= {`${search}`}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MenuBar

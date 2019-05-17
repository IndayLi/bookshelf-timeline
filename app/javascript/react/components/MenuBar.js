import React, { Component } from 'react';
import { Link } from 'react-router'
import SVGIcon from './SVGIcon'
import SVGCircle from './SVGCircle'


const MenuBar = (props) => {
  let fill = "#707070"
  let user = "";
  let books = "";
  let calendar = "";
  let search ="";
  if (props.menu === "books") {
    books = "highlight"
  } else if (props.menu === "user") {
    user = "highlight"
  } else if (props.menu === "calendar") {
    calendar = "highlight"
  } else if (props.menu === "search") {
    search = "highlight"
  }

  <div className="container">
  {props.children}
  </div>
  return (
    <div>
      <div id="menu-bar">
        <div className="menu-icon">
          <div className={`${user}`}>
            <SVGIcon name="user" height={40} />
          </div>
          <div className={`${books}`}>
            <Link to={'/books'}>
              <SVGIcon name="books" height={40} fill={`${fill}`} />
            </Link></div>
          <div className={`${calendar}`}>
            <SVGIcon name="calendar" height={40} />
          </div>
          <div className={`${search}`}>
            <SVGIcon name="search" height={40} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default MenuBar

import React, { Component } from 'react'
import { Link } from 'react-router'

const SVGBook = props => {
  return(
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" width={props.width} height={props.height} viewBox={props.viewBox}>
        <path
        d="M10,0H99a10,10,0,0,1,10,10V550a0,0,0,0,1,0,0H0a0,0,0,0,1,0,0V10A10,10,0,0,1,10,0Z" transform="translate(234 187)" fill={props.color}/>
        <text id={props.title} data-name={props.title} transform="translate(306 603) rotate(-90)" fill="#fff" fontSize="50" fontFamily="Raleway">
        <tspan x="0" y="0">{props.title}
        </tspan>
        </text>
      </svg>
    </div>
  )
}

export default SVGBook

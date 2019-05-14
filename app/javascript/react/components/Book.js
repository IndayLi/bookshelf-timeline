import React, { Component } from 'react'
import { Link } from 'react-router'

// <div className={`book-spine ${props.colorIndex}`} >

const Book = props => {
  // <span className="title">{props.title}</span><span className="author">by {props.author}</span>
  return (
    <div className="book-spine" >
      <div className="title">
      {props.title}
      </div>
      <div className="author">
      by {props.author}
      </div>
    </div>
  )
}
export default Book


// <span className="book-spine">
// <svg width={109} height={550} {...props}>
//   <g data-name="Group 14">
//     <path
//       data-name="Rectangle 4"
//       d="M10 0h89a10 10 0 0 1 10 10v540H0V10A10 10 0 0 1 10 0z"
//       fill="#048091"
//     />
//     <text
//       data-name={props.title}
//       transform="rotate(-90 244 172)"
//       fill="#fff"
//       fontSize={20}
//       fontFamily="Raleway"
//     >
//       <tspan x={0} y={0}>
//         {props.title}
//       </tspan>
//     </text>
//   </g>
// </svg>
// </span>

// const Book = props => {
  //   return (
    //     <div className="book-spine">
    //       <svg xmlns="http://www.w3.org/2000/svg" width="109" height="550" viewBox="0 0 109 1400">
    //         <g transform="translate(-234 -187)">
    //           <path d="M10,0H99a10,10,0,0,1,10,10V550a0,0,0,0,1,0,0H0a0,0,0,0,1,0,0V10A10,10,0,0,1,10,0Z" transform="translate(234 187)" fill="#048091"/>
    //           <text id="book-title" transform="translate(306 603)"><tspan x="0" y="0">{props.title}</tspan></text>
    //         </g>
    //       </svg>
    //     </div>
    //   )
    // }

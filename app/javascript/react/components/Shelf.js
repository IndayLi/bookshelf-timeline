import React, { Component } from 'react'

const Shelf = props => {
  return(
    <div className="shelf flip-container">
      <div className="flipper">
        <div className="shelf-image front">
        </div>
        <div className="shelf-details back">
          <h3>{props.name}</h3>
          <p>{props.description}</p>
          <p>Book Count: #</p>
        </div>
      </div>
    </div>
  )
}
export default Shelf

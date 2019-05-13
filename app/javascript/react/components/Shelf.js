import React, { Component } from 'react';
import { Link } from 'react-router'

const Shelf = props => {
  return(
    <div className="shelf flip-container">
      <div className="flipper">
        <div className="shelf-image front">
        </div>
        <div className="shelf-details back">
          <Link to={`/shelves/${props.id}`}><h3>{props.name}</h3></Link>
          <p>{props.description}</p>
          <p>Book Count: #</p>
        </div>
      </div>
    </div>
  )
}
export default Shelf

import React, { Component } from 'react'

const Shelf = props => {
  return(
    <div>
      <h3>{props.name}</h3>
      <p>{props.description}<br />
      Created: {props.timestamp}</p>
    </div>
  )
}

export default Shelf

import React, { Component } from 'react'
import { Link } from 'react-router'

const Book = props => {
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

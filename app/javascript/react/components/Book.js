import React, { Component } from 'react'
import { Link } from 'react-router'

const Book = props => {
  return (
    <Link to={`/books/${props.id}`}>
      <div className="book-spine" >
        <div className="title">
        {props.title}
        </div>
      </div>
    </Link>
  )
}
export default Book

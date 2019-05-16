import React, { Component } from 'react'
import { Link } from 'react-router'

import BookShowContainer from '../containers/BookShowContainer'

const Book = props => {
  return (
    <Link to={`/books/${props.id}`}>
      <div className="book-spine">
          <div className="title">
          {props.title}
          </div>
      </div>
    </Link>

  )
}
export default Book;

// <div className="author">
// by {props.author}
// </div>

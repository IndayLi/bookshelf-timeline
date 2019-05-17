import React, { Component } from 'react'
import { Link } from 'react-router'

import SVGIcon from '../components/SVGIcon'
import Book from '../components/Book'
import NavBar from '../components/NavBar'
import MenuBar from '../components/MenuBar'
import IMGBookshelf from '../components/IMGBookshelf'

class BooksContainer extends Component {
  constructor(props) {
    super(props);
    this.state={
      user: {},
      books: [],
      menu: "books"
    }
    this.setBookColor = this.setBookColor.bind(this);
  }

  componentDidMount() {
    fetch('/api/v1/books')
      .then(response => {
        if (response.ok) {
          return response;
        } else {
          let errorMessage = `${response.status}(${response.statusText})` ,
          error = new Error(errorMessage);
          throw(error);
        }
        })
        .then(response => response.json())
        .then(body => {
          this.setState({user: body.user, books: body.books})
        })
        .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  setBookColor(value) {
    let colorIndex = ["blue", "pink", "green", "yellow"]
    return colorIndex[value%4]
  }

  render() {
    let pageTitle
    if (this.state.books.length === 0) {
      pageTitle = "Add a Book to Your Library!"
    } else {
      pageTitle = "Select a Book!"
    }

    let bookArray = this.state.books.map((book, index) => {
      return (
        <div className={`book-contents ${this.setBookColor(book.id)}`} key={`${book.id} + div`}>
          <Book
            key={book.id}
            id={book.id}
            title={book.title}
            author={book.author}
            menu={this.state.menu}
            count={this.state.books.length}
            index={index}
          />
        </div>
      )
    })
    return(
      <div>
        <div className="edit-shelf-button">
          <SVGIcon
          name="add-light"
          height={40}
          fill="#F4F4F4"
          />
        </div>
        <div>
        </div>
        <h1 className="page-header">
          {pageTitle}
        </h1>
        <div className="bookshelf-content">
        {bookArray}
        </div>
        <div>
        <IMGBookshelf/>
        </div>
        <NavBar/>
        <MenuBar
          menu={this.state.menu}/>
      </div>
    )
  }
}

export default BooksContainer

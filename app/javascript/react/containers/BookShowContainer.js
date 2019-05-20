import React, { Component } from 'react'
import { Link } from 'react-router'

import SVGIcon from '../components/SVGIcon'
import NavBar from '../components/NavBar'
import MenuBar from '../components/MenuBar'
import DeleteBookForm from '../components/DeleteBookForm'

class BookShowContainer extends Component {
  constructor(props) {
    super(props);
    this.state={
      book: "",
      menu: "books",
      formVisibility: "hidden",
      buttonVisibility: "visible"
    }
    this.showDeleteBookForm = this.showDeleteBookForm.bind(this);
  }

  componentDidMount() {
    let bookId = this.props.params.id
    fetch(`/api/v1/books/${bookId}`)
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
          this.setState({book: body})
            })
        .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  showDeleteBookForm(event) {
    if (this.state.formVisibility==="hidden") {
      this.setState({ formVisibility: "visible", buttonVisibility: "hidden"})
    } else if (this.state.formVisibility==="visible") {
      this.setState({ formVisibility: "hidden", buttonVisibility: "visible" })
    }
  }

  render() {
    return(
      <div>
        <div className={`delete-book ${this.state.formVisibility}`}>
          <DeleteBookForm
            handleVisibility={this.showDeleteBookForm}
            book={this.state.book}
          />
        </div>
        <div className="book-show-container">
          <div className="book-show-left">
            <div className="book-cover-image">
            <img src={this.state.book.image_url}/>
            </div>
          </div>
          <div className="book-show-right">
            <h3>{this.state.book.title}</h3>
            <div className="book-details">
              <dd>
                <dl><span className="bold-text">Author:</span> {this.state.book.author}</dl>
                <dl><span className="bold-text">Description:</span> {this.state.book.description}</dl>
                <dl><span className="bold-text">Pages:</span> {this.state.book.page_count}</dl>
                <dl><span className="bold-text">Setting:</span> {this.state.book.location}</dl>
                <dl><span className="bold-text">Year Published:</span> {this.state.book.publication_year}</dl>
              </dd>
            </div>
            <h3>Timelines Created</h3>
            <div className="timeline-list">
              <ul>
                <Link to=''><li>Timeline #1</li></Link>
                <Link to=''><li>Timeline #2</li></Link>
              </ul>
            </div>
          </div>
        </div>
        <div className={`edit-shelf-button ${this.state.buttonVisibility}`} onClick={this.showDeleteBookForm}>
          <SVGIcon
          name="delete-light"
          height={35}
          fill="#707070"
          />
        </div>
        <div>
          <NavBar />
          <MenuBar
            menu={this.state.menu}
          />
        </div>
      </div>
    )
  }
}
export default BookShowContainer;

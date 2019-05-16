import React, { Component } from 'react'
import { Link } from 'react-router'

import NavBar from '../components/NavBar'

class BookShowContainer extends Component {
  constructor(props) {
    super(props);
    this.state={
      book: ""
    }
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

  render() {
    return(
      <div>
        <div className="book-show-container">
          <div className="book-show-left">
            <div className="book-cover-image">
            <img src={this.state.book.image_url}/>
            </div>
          </div>
          <div className="book-show-right">
            <div>
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
            </div>
            <div>
              <h3>Timelines Created</h3>
              <div className="timeline-list">
                <ul>
                  <li>Timeline #1</li>
                  <li>Timeline #2</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div>
        <NavBar />
        </div>
      </div>
    )
  }
}

export default BookShowContainer;

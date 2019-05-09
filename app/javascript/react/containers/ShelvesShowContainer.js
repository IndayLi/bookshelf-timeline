import React, { Component } from 'react'
import Book from './Book'


class ShelvesShowContainer extends Component {
  constructor(props) {
    super(props);
    this.state={
    }
  }

  componentDidMount() {

  }

  render() {
    return(
      <div>
        <h1>This is the Shelves Show Container</h1>
        <div>
          <SVGIcon name="book-1" width={40} />
          <text id="BOOK_TITLE" data-name="BOOK TITLE" transform="translate(398 572) rotate(-90)" fill="#fff" font-size="50" font-family="Raleway-SemiBold, Raleway" font-weight="600"><tspan x="0" y="0">Book-1</tspan></text>
          <SVGIcon name="book-2" width={40} />
          <text id="BOOK_TITLE" data-name="BOOK TITLE" transform="translate(398 572) rotate(-90)" fill="#fff" font-size="50" font-family="Raleway-SemiBold, Raleway" font-weight="600"><tspan x="0" y="0">Book-2</tspan></text>
          <SVGIcon name="book-3" width={40} />
          <SVGIcon name="book-4" width={40} />
          <SVGIcon name="book-5" width={40} />
          <SVGIcon name="book-6" width={40} />
          <SVGIcon name="book-7" width={40} />
          <SVGIcon name="book-8" width={40} />
        </div>
      </div>
    )
  }
}

export default ShelvesShowContainer

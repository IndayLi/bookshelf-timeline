import React, { Component } from 'react'
import Book from '../components/Book'
import NavBar from '../components/NavBar'


class ShelvesContainer extends Component {
  constructor(props) {
    super(props);
    this.state={
      shelves: []
    }
  }

  componentDidMount() {
  }

  render() {
    let bookColor = () => {
      let COLORS = [
        "#61C155",
        "#F2D43F",
        "#D1026C",
        "#02A7BC"
      ]
      let selection = Math.floor(Math.random() * Math.floor(4))
      return COLORS[selection]
    }

    return(
      <div>
        <h1>These are Your Bookshelves</h1>
        <div>
        </div>
        <div>
          <Book
            width="142"
            height="1423"
            color={bookColor()}
            title="Title"
            viewBox="0 0 142 1423"
          />
        </div>
        <div>
          <NavBar />
        </div>
      </div>
    )
  }
}

export default ShelvesContainer

import React, { Component } from 'react'
import Book from '../components/Book'
import NavBar from '../components/NavBar'


class ShelvesContainer extends Component {
  constructor(props) {
    super(props);
    this.state={
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
        <h1>This is the Shelves IndexContainer</h1>
        <div>
          <Book
            height="1243"
            width="142"
            color={bookColor()}
            title="Title"
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

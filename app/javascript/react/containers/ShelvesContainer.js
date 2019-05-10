import React, { Component } from 'react'
import Book from '../components/Book'
import NavBar from '../components/NavBar'
import Shelf from '../components/Shelf'


class ShelvesContainer extends Component {
  constructor(props) {
    super(props);
    this.state={
      shelves: []
    }
  }

  componentDidMount() {
    fetch('/api/v1/shelves')
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
      this.setState({shelves: body})
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
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

    let shelvesList = this.state.shelves.map(shelf => {
      return (
        <Shelf
          key={shelf.id}
          id={shelf.id}
          name={shelf.name}
          description={shelf.description}
          timestamp={shelf.created_at}
        />
      )
    })

    return(
      <div>
        <h1>These are Your Bookshelves</h1>
        <div>
        {shelvesList}
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

import React, { Component } from 'react'
import { Link } from 'react-router'

import FormField from './FormField'

class DeleteBookForm extends Component {
  constructor(props) {
    super(props);
    this.state={
    }
    this.handleConfirmedDelete = this.handleConfirmedDelete.bind(this);
  }

  handleConfirmedDelete(event) {
    event.preventDefault()
    let deletedShelf={user: this.props.user, book: this.props.book}
    fetch('/api/v1/shelves', {
      credentials: "same-origin",
      method: 'delete',
      body: JSON.stringify(deletedShelf),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
      })
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
          debugger

        })
        .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  render() {
    return(
      <div>
        <h3>Are You Sure You Want to<br/> Remove This Book<br/>From Your Bookshelf?</h3>
        <form onSubmit={this.handleConfirmedDelete}>
        <FormField
          type="submit"
          label=""
          name="submit-form"
          value="Remove Book"
        />
        <div onClick= { this.props.handleVisibility }>
          <FormField
            type="button"
            label=""
            name="cancel-form"
            value="Cancel"
          />
        </div>
        </form>
      </div>
    )
  }
}

export default DeleteBookForm

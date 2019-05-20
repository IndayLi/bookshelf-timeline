import React, { Component } from 'react'
import { Link } from 'react-router'

import FormField from './FormField'

class DeleteBookForm extends Component {
  constructor(props) {
    super(props);
    this.state={
    }
  }

  render() {
    return(
      <div>
        <h3>Are You Sure You Want to<br/> Remove This Book<br/>From Your Bookshelf?</h3>
        <form onSubmit={this.handleOnSubmit}>
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

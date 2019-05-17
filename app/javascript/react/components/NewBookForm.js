import React, { Component } from 'react'

import FormField from './FormField'

class NewBookForm extends Component {
  constructor(props) {
    super(props);
    this.state={
      user: ""
      title: "",
      author: "",
      page_count: "",
      description: "",
      location: "",
      image_url: "",
      publication_year: "",

    }
    debugger
  }


  }
//requires fetch call to add book to list of books, AND add a shelf with user
  render() {
    return(
      <div>
        <form onSubmit="" className="form add-book"
          <FormField
            type="text"
            fieldName="title"
            value={this.state. ______}


          />
      </div>
    )
  }
}

export default NewBookForm;

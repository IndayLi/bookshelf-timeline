import React, { Component } from 'react'

import FormField from './FormField'

class NewBookForm extends Component {
  constructor(props) {
    super(props);
    this.state={
      title: "",
      author: "",
      page_count: "",
      description: "",
      location: "",
      publication_year: ""
    }
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
  }

  handleOnChange(event) {
    let newData = event.target.value;
    this.setState({ [event.target.name]: newData });
  }

  handleOnSubmit(event) {
    let bookPayload={
      title: this.state.title,
      author: this.state.author,
      page_count: this.state.page_count,
      description: this.state.description,
      location: this.state.location,
      publication_year: this.state.publication_year
    }
    this.props.addNewUserBook(bookPayload)
  }
  clearForm() {
    this.setState({
      title: "",
      author: "",
      page_count: "",
      description: "",
      location: "",
      publication_year: ""
    });
  };

//requires fetch call to add book to list of books, AND add a shelf with user
  render() {
    return(
      <div>
        <h3>What New Book are You Exploring?</h3>
        <form onSubmit={this.handleOnSubmit}>
          <FormField
            type="text"
            label="Title *"
            name="title"
            value={ this.state.title }
            handleOnChange={ this.handleOnChange }
          />
          <FormField
            type="text"
            label="Author *"
            name="author"
            value={ this.state.author }
            handleOnChange={ this.handleOnChange }
          />
          <FormField
            type="text"
            label="Location"
            name="location"
            value={ this.state.location }
            handleOnChange={ this.handleOnChange }
          />
          <FormField
            type="text"
            label="Description"
            name="description"
            value={ this.state.description }
            handleOnChange={ this.handleOnChange }
          />
          <FormField
            type="integer"
            label="Number of Pages"
            name="page_count"
            value={ this.state.page_count }
            handleOnChange={ this.handleOnChange }
          />
          <FormField
            type="integer"
            label="Year published"
            name="publication_year"
            value={ this.state.publication_year }
            handleOnChange={ this.handleOnChange }
          />
          <FormField
            type="submit"
            label=""
            name="submit-form"
            value="Add Book"
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
  };
};

export default NewBookForm;

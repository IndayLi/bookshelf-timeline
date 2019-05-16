import React, { Component } from 'react';
import { Router, browserHistory, Route} from 'react-router';
import BooksContainer from '../containers/BooksContainer';
import BookShowContainer from '../containers/BookShowContainer';
import MenuBar from './MenuBar';
import IconIndex from './IconIndex'

const App = (props) => {
  return(
    <Router history={browserHistory}>
      <Route path='/' component={BooksContainer}>
        <Route path='/books' component={BooksContainer}/>
        <Route path='/books/:id' component={BookShowContainer}/>
      </Route>
    </Router>
  )
}

export default App

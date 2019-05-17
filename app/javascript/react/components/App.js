import React, { Component } from 'react';
import { Router, browserHistory, Route} from 'react-router';

import BooksContainer from '../containers/BooksContainer';
import BookShowContainer from '../containers/BookShowContainer';

const App = (props) => {
  return(
    <Router history={browserHistory}>
      <Route path='/' component={BooksContainer} />
      <Route path='/books' component={BooksContainer}/>
      <Route path='/books/:id' component={BookShowContainer}/>
    </Router>
  )
}
export default App;

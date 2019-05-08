import React, { Component } from 'react';
import { Router, Route, browserHistory} from 'react-router';
import ShelvesContainer from '../containers/ShelvesContainer'
import NavBar from './NavBar';

const App = (props) => {
  return(
    <Router history={browserHistory}>
      <Route path='/' component={NavBar}>
        <Route path='/shelves' component={ShelvesContainer}/>
      </Route>
    </Router>
  )
}

export default App

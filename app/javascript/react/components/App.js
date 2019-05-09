import React, { Component } from 'react';
import { Router, browserHistory, Route} from 'react-router';
import ShelvesContainer from '../containers/ShelvesContainer'
import NavBar from './NavBar';
import IconIndex from './IconIndex'

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

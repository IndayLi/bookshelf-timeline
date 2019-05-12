import React, { Component } from 'react';
import { Router, browserHistory, Route} from 'react-router';
import ShelvesContainer from '../containers/ShelvesContainer'
import MenuBar from './MenuBar';
import IconIndex from './IconIndex'

const App = (props) => {
  return(
    <Router history={browserHistory}>
      <Route path='/' component={MenuBar}>
        <Route path='/shelves' component={ShelvesContainer}/>
      </Route>
    </Router>
  )
}

export default App

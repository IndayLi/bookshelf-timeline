import React, { Component } from 'react';
import { Router, browserHistory, Route} from 'react-router';
import ShelvesContainer from '../containers/ShelvesContainer'
import ShelvesShowContainer from '../containers/ShelvesShowContainer'
import MenuBar from './MenuBar';
import IconIndex from './IconIndex'

const App = (props) => {
  return(
    <Router history={browserHistory}>
      <Route path='/' component={MenuBar}>
        <Route path='/shelves' component={ShelvesContainer}/>
        <Route path='/shelves/:id' component={ShelvesShowContainer}/>
      </Route>
    </Router>
  )
}

export default App

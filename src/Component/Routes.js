import React, {Component} from 'react';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import App from './App';
import Home from './Home';
import Search from './Search';
import Faves from './Faves';

function Routes(props) {
  return (
      <Router history={hashHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={Home} />
          <Route path="faves" component={Faves} />
          <Route path="search" component={Search} />
        </Route>
      </Router>
    );
}

export default Routes;

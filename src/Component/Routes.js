import React, {Component} from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import App from './App';
import Home from './Home';
import Search from './Search';
import Faves from './Faves';
import selProp from './selProp';
import Form from './Form';



function Routes(props) {
  return (
      <Router history={browserHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={Home} />
          <Route path="faves" component={Faves} />
          <Route path="property/:id" component={selProp} />
          <Route path="search" component={Search} />
          <Route path="form" component={Form} />
        </Route>
      </Router>
    );
}

export default Routes;

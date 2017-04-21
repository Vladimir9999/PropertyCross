import React, {Component} from 'react';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import App from './App';
import Home from './Home';
import Search from './Search';
import Faves from './Faves';

class Main extends Component {
  render() {
    return (
      <div className="mainContainer">
        <Router history={hashHistory}>
          <Route path="/" component={Home}/>
          <Route path="Faves" component={Faves} />
          <Route path="Search" component={Search} />
        </Router>
      </div>

    );
  }
}

export default Main;

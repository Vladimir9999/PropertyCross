import React, {Component} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Properties from './Properties';
import propertiesActions from '../actions';

import '../../stylesheets/Container.scss';

class Home extends Component {



/*  onClickDelete = (id) => {
    this.props.propertiesActions.delFave(id);
  };*/

  render() {
    return (
      <div className="homeContainer">
        <h1>Bla bla bla</h1>
        <ul>
          {this.props.properties.map((elem, ind) => {
            return (
              <li key={ind} >
                <Properties elem={elem} />
              </li>
            );
          })}
        </ul>
        <br />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    properties: state.propertiesReducer.properties,
    faves: state.favesReducer.faves
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    propertiesActions: bindActionCreators(propertiesActions, dispatch)
  }
};


export default connect(mapStateToProps, mapDispatchToProps)(Home);
